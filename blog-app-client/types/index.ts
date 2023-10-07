export type CourseType = {
  id: string;
  title: string;
  course_time: string;
  lecturer: string;
};

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
