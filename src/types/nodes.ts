export type HoverNode = {
  id: string;
  ref: HTMLDivElement | HTMLButtonElement | null;
  hoverClassName: string;
};

export type Nodes = {
  hover: { [key: string]: HoverNode };
};
