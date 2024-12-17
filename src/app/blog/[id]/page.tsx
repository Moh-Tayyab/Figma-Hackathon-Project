
import posts from "@/blogdetails/data.json";
import Image from "next/image";
import { Clock4, User, CalendarDays } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Comments from "@/components/Comments";
import BlogAnimation from "@/components/animations/BlogAnimation";


type tParams = Promise<{ id: string[] }>;



export default async function AllBlog({ params }: { params: tParams }) {

  const id  = (await params).id as unknown as string

  
  const post = posts.find((post) => post.id === id);
  // If no post is found, return a Skeleton component
  if (!post) return <Skeleton />;

  return (
    <div className="pt-20 w-full">
      <div className="max-w-screen-md mx-auto py-20 px-10">
        <BlogAnimation>
          <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">
            {post.tittle}
          </h1>
          <div className="my-6 text-slate-600 flex flex-col sm:flex-row gap-6">
            <div className="flex gap-2">
              <User />
              <span>{post.author}</span>
            </div>
            <div className="flex gap-2">
              <CalendarDays />
              <span>11/3/24</span>
            </div>
            <div className="flex gap-2">
              <Clock4 />
              <span>4 min read</span>
            </div>
          </div>
        </BlogAnimation>
        <BlogAnimation>
          <Image
            src={post.src}
            alt={post.tittle}
            height={2000}
            loading="lazy"
            width={2000}
            objectFit="cover"
            objectPosition="center"
            className="w-full rounded-lg object-cover my-4"
          />
          <BlogAnimation>
            <p className="text-2xl leading-relaxed py-10">{post.content}</p>
          </BlogAnimation>
        </BlogAnimation>
        <BlogAnimation>
          <div className="mt-20">
            <Comments blogId={post.id} />
          </div>
        </BlogAnimation>
      </div>
    </div>
  );
}
