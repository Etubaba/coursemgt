import { BlogType } from "@/types";
import Link from "next/link";

const BlogItem = ({ post }: { post: BlogType }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="md:w-64 w-80 mb-4 md:mb-0 h-auto  ">
        <div className="w-full relative h-40 inline-block overflow-hidden">
          <img
            src={post.image}
            className="w-full zoom-image hover:opacity-70 mb-2 h-full cursor-pointer "
            alt={post.title}
          />
        </div>
        <p className="mb-2 text-lg text-title  font-bold">{post.title}</p>
        <div className="text-textcolor  text-sm ">
          {new Date(post.created_at).toDateString()}
        </div>
        <div className="border-b-4 my-5 border-primary w-32 " />
        <p className="text-textcolor  w-full text-sm">
          {post.content.substring(10, 80) + "..."}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
