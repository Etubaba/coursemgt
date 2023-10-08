export type RegisterInputType = {
  email: string;
  password: string;
  full_name: string;
};

export type LoginInputType = Omit<RegisterInputType, "full_name">;

export type BlogType = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  image: string;
  slug: string;
};

export type BlogResponseType = {
  data: BlogType[];
  post_per_page: number;
  total_page: number;
  statusCode: number;
};

export type UserPropType = {
  email: string;
  full_name: string;
  id: string;
};

export type CommentType = {
  id: string;
  comment: String;
  postId: string;
  author: string;
  created_at: string;
};

export interface IPostComment {
  author: string;
  comment: string;
}

export type EditorType = {
  value: string;
  onChange: (e: string) => void;
};
