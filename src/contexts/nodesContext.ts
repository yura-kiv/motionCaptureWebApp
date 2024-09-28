import { createContext } from "react";
import { HoverNode } from "../types/nodes";

export const NodesContext = createContext<{
  addHoverNode: (element: HoverNode) => void;
  removeHoverNode: (id: string) => void;
}>(null!);
