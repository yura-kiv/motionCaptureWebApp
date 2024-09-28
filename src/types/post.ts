export type Post = {
  id: number;
  img: string;
  label: string;
  text: string;
  like: boolean;
  category: Category;
};

export type Category = "sport" | "space" | "nature" | "tech";
