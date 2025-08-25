'use client';

/**
 * GWorldMap.tsx
 *
 * An interactive world map component that displays the user's journey through
 * different countries with animated transitions and interactive markers.
 *
 * Features:
 * - Intersection Observer triggers animation when component becomes visible
 * - Animated tour through Indonesia → USA → Japan
 * - Interactive markers with click handlers
 * - Smooth map transitions using Mapbox flyTo API
 *
 * Optimizations:
 * - Uses locationMap (useRef) to avoid repeated array lookups
 * - Implements shared flyToLocation function to reduce code duplication
 * - Uses config constants for better maintainability
 * - Implements structured animation sequence with proper TypeScript types
 * - Proper cleanup of event listeners and timeouts
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Map as MapGL,
  Marker,
  NavigationControl,
  type ViewState,
} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import type mapboxgl from 'mapbox-gl';
import type { MapRef } from 'react-map-gl/mapbox';

interface Location {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  description: string;
}

interface GWorldMapProps {
  className?: string;
  activeLocationId?: string;
  onLocationSelect?: (location: Location) => void;
}

// Define map constants
const MAP_CONFIG = {
  TOKEN:
    'pk.eyJ1IjoiZ2p0aWdyaXMiLCJhIjoiY21kbDQ0bXZoMTVxeDJucG8weW5tazA1aSJ9.R-FvAtTvdJzyMD-M2pG2Og',
  DEFAULT_STYLE: 'mapbox://styles/mapbox/dark-v11',
  INITIAL_VIEW: {
    longitude: 0,
    latitude: 20,
    zoom: 1.5,
  },
  ANIMATION: {
    DEFAULT_DURATION: 2000,
    DEFAULT_ZOOM: 4,
  },
};

// Location data - could be moved to a separate data file if it grows
const LOCATIONS: Location[] = [
  {
    id: 'indonesia',
    name: 'Indonesia',
    longitude: 106.8456,
    latitude: -6.2088,
    description: 'Jakarta, Indonesia - Where my journey began',
  },
  {
    id: 'japan',
    name: 'Japan',
    longitude: 139.6503,
    latitude: 35.6762,
    description: 'Tokyo, Japan - Where I honed my skills',
  },
  {
    id: 'usa',
    name: 'United States',
    longitude: -122.4194,
    latitude: 37.7749,
    description: 'San Francisco, USA - Where I expanded my horizons',
  },
];

const GWorldMap: React.FC<GWorldMapProps> = ({
  className = '',
  activeLocationId,
  onLocationSelect,
}) => {
  // Create a ref to store the map instance
  const mapRef = useRef<MapRef>(null);

  const [viewState, setViewState] = useState<ViewState>({
    longitude: MAP_CONFIG.INITIAL_VIEW.longitude,
    latitude: MAP_CONFIG.INITIAL_VIEW.latitude,
    zoom: MAP_CONFIG.INITIAL_VIEW.zoom,
    bearing: 0,
    padding: { left: 0, top: 0, right: 0, bottom: 0 },
    pitch: 0,
  });

  // Pre-compute location references to avoid repeated lookups
  const locationMap = useRef<Record<string, Location>>(
    LOCATIONS.reduce((acc, location) => {
      acc[location.id] = location;
      return acc;
    }, {} as Record<string, Location>)
  ).current;

  // Find active location based on activeLocationId prop
  const activeLocation = activeLocationId
    ? locationMap[activeLocationId]
    : null;

  // Get Tokyo reference for initial animation
  const tokyo = locationMap.japan;
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set initial view state to a zoomed-out world view
  useEffect(() => {
    if (!initialAnimationDone) {
      setViewState((prev) => ({
        ...prev,
        longitude: MAP_CONFIG.INITIAL_VIEW.longitude,
        latitude: MAP_CONFIG.INITIAL_VIEW.latitude,
        zoom: MAP_CONFIG.INITIAL_VIEW.zoom, // Zoomed out to see much of the world
      }));
    }
  }, [initialAnimationDone]);

  // Set up intersection observer to trigger animation when component comes into view
  useEffect(() => {
    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible && !initialAnimationDone) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -10% 0px', // Start animation a bit before fully visible
      }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [isVisible, initialAnimationDone]);

  // Handle map load and initial animation when component becomes visible
  useEffect(() => {
    if (!tokyo || initialAnimationDone || !isVisible) return;

    // Store all timers for proper cleanup
    const timers: NodeJS.Timeout[] = [];

    // Handler for the animation sequence
    const handleAnimation = (map: mapboxgl.Map) => {
      // Animation waypoints with type safety
      type Waypoint = {
        center?: [number, number]; // Properly typed as LngLatLike
        zoom: number;
        duration: number;
        delay: number;
        label: string;
        isLast?: boolean;
      };

      // Define location waypoints based on available locations in the map
      const createWaypoints = (): Waypoint[] => {
        const waypoints: Waypoint[] = [
          {
            center: [0, 20],
            zoom: 1.5,
            duration: 1000,
            delay: 500,
            label: 'Starting world view',
          },
        ];

        // Define the tour sequence - this makes it easy to adjust the order
        const tourSequence: {
          id: string;
          zoom: number;
          duration: number;
          delay: number;
        }[] = [
          { id: 'indonesia', zoom: 4, duration: 2000, delay: 1000 },
          { id: 'usa', zoom: 4, duration: 2000, delay: 2500 },
          { id: 'japan', zoom: 8, duration: 2000, delay: 2500 },
        ];

        // Add locations to waypoints if they exist in the map
        tourSequence.forEach((stop, index) => {
          const location = locationMap[stop.id];
          if (location) {
            waypoints.push({
              center: [location.longitude, location.latitude],
              zoom: stop.zoom,
              duration: stop.duration,
              delay: stop.delay,
              label: location.name,
              isLast: index === tourSequence.length - 1,
            });
          }
        });

        return waypoints;
      };

      const waypoints = createWaypoints();

      // Execute each animation waypoint sequentially
      let cumulativeDelay = 0;

      waypoints.forEach((waypoint, index) => {
        // Skip undefined waypoints
        if (!waypoint.center) return;

        cumulativeDelay += index > 0 ? waypoints[index - 1].delay : 0;

        const timer = setTimeout(() => {
          if (!initialAnimationDone) {
            map.flyTo({
              center: waypoint.center,
              zoom: waypoint.zoom,
              duration: waypoint.duration,
              essential: true,
            });

            // Mark animation as complete after the last waypoint
            if (waypoint.isLast) {
              setInitialAnimationDone(true);
            }
          }
        }, cumulativeDelay);

        timers.push(timer);
      });
    };

    // Try to get the map instance
    const map = mapRef.current?.getMap();

    if (map) {
      if (map.loaded()) {
        handleAnimation(map);
      } else {
        const loadHandler = () => handleAnimation(map);
        map.once('load', loadHandler);
        return () => {
          map.off('load', loadHandler);
          // Clear all animation timers
          timers.forEach(clearTimeout);
        };
      }
    } else {
      // If map isn't available yet, try again after a delay
      const timer = setTimeout(() => {
        const map = mapRef.current?.getMap();
        if (map) handleAnimation(map);
      }, 1000);
      timers.push(timer);
    }

    // Cleanup function - clear all timers
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [tokyo, initialAnimationDone, isVisible, locationMap]);

  // Shared function to animate to a location - reduces code duplication
  const flyToLocation = useCallback((location: Location) => {
    if (!location) return;

    const map = mapRef.current?.getMap();

    if (map) {
      map.flyTo({
        center: [location.longitude, location.latitude],
        zoom: MAP_CONFIG.ANIMATION.DEFAULT_ZOOM,
        duration: MAP_CONFIG.ANIMATION.DEFAULT_DURATION,
        essential: true,
      });
    } else {
      // Fallback if map instance is not available
      setViewState((prev: ViewState) => ({
        ...prev,
        longitude: location.longitude,
        latitude: location.latitude,
        zoom: MAP_CONFIG.ANIMATION.DEFAULT_ZOOM,
      }));
    }
  }, []);

  // Effect to animate to the active location
  useEffect(() => {
    if (activeLocation && !initialAnimationDone) {
      return;
    }

    if (activeLocation) {
      flyToLocation(activeLocation);
    }
  }, [activeLocation, flyToLocation, initialAnimationDone]);

  // Simple click handler for markers
  const handleMarkerClick = (location: Location) => {
    if (onLocationSelect) {
      onLocationSelect(location);
    } else {
      flyToLocation(location);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`rounded-xl overflow-hidden ${className}`}
    >
      <MapGL
        ref={mapRef}
        {...viewState}
        onMove={(evt: { viewState: ViewState }) => setViewState(evt.viewState)}
        mapStyle={MAP_CONFIG.DEFAULT_STYLE}
        mapboxAccessToken={MAP_CONFIG.TOKEN}
        style={{ width: '100%', height: '100%' }}
        renderWorldCopies={true} // Renders multiple copies of the world for a more seamless experience
      >
        <NavigationControl position="top-right" />

        {/* Simple direct rendering of markers - no need for memoization with just 3 markers */}
        {LOCATIONS.map((location) => (
          <Marker
            key={location.id}
            longitude={location.longitude}
            latitude={location.latitude}
            anchor="bottom"
            onClick={() => handleMarkerClick(location)}
          >
            <div
              className={`
              w-6 h-6 bg-black rounded-full flex items-center justify-center cursor-pointer
              border-2 ${
                location.id === activeLocationId
                  ? 'border-white scale-125'
                  : 'border-transparent'
              }
              transition-all duration-300 hover:scale-125
            `}
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </Marker>
        ))}
      </MapGL>
    </div>
  );
};

export default GWorldMap;
