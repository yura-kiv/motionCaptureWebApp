import { NormalizedLandmarkList } from "@mediapipe/hands";
import { Nodes } from "../types/nodes";
import { OVERLAY_ID } from "../constants";

export const detectHoverEffects = (
  landmarks: NormalizedLandmarkList,
  nodes: React.MutableRefObject<Nodes>["current"]["hover"]
) => {
  const fingerTip = landmarks[8];
  const fingerX = fingerTip.x * window.innerWidth;
  const fingerY = fingerTip.y * window.innerHeight;
  let currentHoveredNodes = document.elementsFromPoint(
    fingerX,
    fingerY
  ) as HTMLElement[];
  const overlayIndex = currentHoveredNodes.findIndex(
    (el) => el.id === OVERLAY_ID
  );
  if (overlayIndex !== -1)
    currentHoveredNodes = currentHoveredNodes.slice(0, overlayIndex + 1);
  Object.values(nodes).forEach((node) => {
    if (node.ref)
      if (currentHoveredNodes.includes(node.ref))
        node.ref.classList.add(node.hoverClassName);
      else node.ref.classList.remove(node.hoverClassName);
  });
};
