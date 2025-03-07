export interface Category {
  id: string;
  name: string;
  icon: string;
  purpose?: string;
}

export interface Word {
  id: string;
  text: string;
  lang: string;
  image: string;
  category: string;
}
