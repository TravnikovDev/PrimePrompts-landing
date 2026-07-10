export type Prompt = {
  id: string;
  title: string;
  description: string;
  promptText: string;
  category: string;
  categoryId: string;
  trending: boolean;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  blurb: string;
  image: string;
};
