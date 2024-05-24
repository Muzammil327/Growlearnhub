const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// /api/get/book
// /api/get/sbook
// /api/post/book
// /api/delete/book
// /api/update/book

export const GetBook = `${URL}/api/get/book`;
export const DeleteBook = `${URL}/api/delete/book`;

export const GetSingleBook = `${URL}/api/get/sbook`;
export const PostBook = `${URL}/api/post/book`;
export const UpdateBook = `${URL}/api/update/book`;

// /api/get/heading1
// /api/get/sheading1
// /api/get/heading1bytitle
// /api/post/heading1
// /api/delete/heading1
// /api/update/heading1

export const GetHeading1 = `${URL}/api/get/heading1`;
export const DeleteHeading1 = `${URL}/api/delete/heading1`;

export const GetHeading1BYTITLE = `${URL}/api/get/heading1bytitle`;
export const GetSingleHeading1 = `${URL}/api/get/sheading1`;
export const PostHeading1 = `${URL}/api/post/heading1`;
export const UpdateHeading1 = `${URL}/api/update/heading1`;

// /api/get/heading2
// /api/get/sheading2
// /api/get/heading2bytitle
// /api/get/heading1byid
// /api/post/heading2
// /api/delete/heading2
// /api/update/heading2

export const GetHeading2 = `${URL}/api/get/heading2`;
export const DeleteHeading2 = `${URL}/api/delete/heading2`;

export const GetHeading2BYTITLE = `${URL}/api/get/heading2bytitle`;
export const GetHeading2BYID = `${URL}/api/update/heading1byid`;
export const GetSingleHeading2 = `${URL}/api/get/sheading2`;
export const PostHeading2 = `${URL}/api/post/heading2`;
export const UpdateHeading2 = `${URL}/api/update/heading2`;

// /api/get/commentform
// /api/post/commentform
// /api/delete/commentform

export const GetNewsletter = `${URL}/api/get/newsletter`;
export const DeleteNewsletter = `${URL}/api/delete/newsletter`;

export const PostNewsletter = `${URL}/api/post/newsletter`;

// /api/get/commentform
// /api/post/commentform
// /api/delete/commentform

export const GetCommentForm = `${URL}/api/get/commentform`;
export const DeleteCommentForm = `${URL}/api/delete/commentform`;

export const PostCommentForm = `${URL}/api/post/commentform`;

// /api/get/mcqs

export const GetMcqs = `${URL}/api/get/mcqs`;
export const GetMcqsUser = `${URL}/api/get/Usermcqs`;
export const GetMcqsUserSlug = `${URL}/api/get/UsermcqsSlug`;
export const DeleteMcqs = `${URL}/api/delete/mcqs`;
