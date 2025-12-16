export interface Event {
  id: string;
  title: string;
  year: string;
  description: string;
  images: string[];
  tags: string[];
  order?: number;
}
