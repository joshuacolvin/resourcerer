export interface Collection {
  id: number;
  authorId: number;
  author: string;
  avatar: string;
  title: string;
  summary: string;
  likes: number;
  tags: string[];
  category: string;
  created: number;
  resources: Array<any>;
}
