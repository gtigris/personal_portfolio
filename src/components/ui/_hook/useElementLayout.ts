import { useEffect, useState } from "react";

export function useElementLayout(): "sm" | "md" | "lg" {
	const [layout, setLayout] = useState<"sm" | "md" | "lg">("sm");

	useEffect(() => {
		const readLayout = () => {
			const val = getComputedStyle(document.documentElement)
				.getPropertyValue("--element-layout")
				.trim();
			if (val === "lg" || val === "md" || val === "sm") {
				setLayout(val);
			}
		};

		readLayout();
		window.addEventListener("resize", readLayout);
		return () => window.removeEventListener("resize", readLayout);
	}, []);

	return layout;
}
