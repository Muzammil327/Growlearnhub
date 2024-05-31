export interface Books {
  id: number;
  title: string;
  link: string;
}

export interface List {
  id: number;
  title: string;
  link: string;
}
export interface vu_Book {
  id: number;
  title: string;
  link: string;
}
export interface class_Book {
  name: string;
  list: List[];
}
