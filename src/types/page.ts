// newsletter
export interface NewsletterData {
  email: string;
}
export interface NewsletterGet {
  _id: string;
  email: string;
}
export interface CommentFormGet {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  url: string;
  message: string;
  createdAt: string;
}

interface Heading1Type {
  title: string;
}
interface Heading2Type {
  title: string;
}
// first
export interface IpropsbookName {
  bookName: string;
}

// second

// third
export interface IpropsHeading2 {
  bookName: string;
  heading1: string;
  heading2: string;
}
// export type Heading2Types = {
//   _id: string;
//   title: string;
//   description: string;
//   bookId: BookTypes;
//   heading1Id: Heading1Types;
//   heading2Id: Heading2Type;
// };
// forth

// book  ----------------------------------------
export type BookTypesGet = {
  _id: string;
  title: string;
};
export type BookTypesPost = {
  title: string;
};
export interface IpropsbookName {
  bookName: string;
}

// heading 1     ----------------------------------------
export type Heading1TypesGet = {
  _id: string;
  title: string;
  bookId: string;
};
export type Heading1TypesPost = {
  title: string;
  bookId: string;
};
export interface IpropsHeading1 {
  bookName: string;
  heading1: string;
}

// heading 2   ----------------------------------------
export type Heading2TypesGet = {
  _id: string;
  title: string;
  bookId: string;
  heading1Id: string;
};
export type Heading2TypesPost = {
  title: string;
  bookId: string;
  heading1Id: string;
};
export interface IpropsHeading2 {
  bookName: string;
  heading1: string;
  heading2: string;
}

// mcqs ----------------------------------------

export interface IpropsFinal {
  final: string;
}
export type McqsTypes = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  bookId: BookTypesGet;
  heading1Id: Heading1Type;
  heading2Id: string;
  options: string[];
  relatedId: string[];
  correctOption: string;
};
interface Tag {
  id: string;
}
export type McqsFormTypes = {
  title: string;
  bookId: string;
  description: string;
  heading1Id: string;
  image: any;
  heading2Id: string;
  options: string[];
  relatedId: Tag[];
  correctOption: string;
};
export type PaginationTypes = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
};
