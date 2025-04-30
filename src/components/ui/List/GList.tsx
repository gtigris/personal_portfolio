import * as React from "react";
import { cn } from "@/lib/utils";

interface GListBaseProps {
  lists: string[];
  listStyle?: string;
  className?: string;
}

interface GListProps extends GListBaseProps {
  type: "ordered" | "unordered";
}

const GUnorderedList = React.forwardRef<HTMLUListElement, GListBaseProps>(
  ({ lists, listStyle = "", className, ...props }, ref) => (
    <ul ref={ref} className={cn("my-2", className)} {...props}>
      {lists.map((list) => (
        <li key={list} className={cn(listStyle)}>
          {list}
        </li>
      ))}
    </ul>
  )
);

GUnorderedList.displayName = "GUnorderedList";

const GOrderedList = React.forwardRef<HTMLOListElement, GListBaseProps>(
  ({ lists, listStyle = "", className, ...props }, ref) => (
    <ol ref={ref} className={cn("my-2", className)} {...props}>
      {lists.map((list) => (
        <li key={list} className={cn(listStyle)}>
          {list}
        </li>
      ))}
    </ol>
  )
);

GOrderedList.displayName = "GOrderedList";

const GList = React.forwardRef<HTMLUListElement | HTMLOListElement, GListProps>(
  ({ type, ...props }, ref) => {
    return type === "ordered" ? (
      <GOrderedList {...props} ref={ref as React.Ref<HTMLOListElement>} />
    ) : (
      <GUnorderedList {...props} ref={ref as React.Ref<HTMLUListElement>} />
    );
  }
);

GList.displayName = "GList";
export default GList;
