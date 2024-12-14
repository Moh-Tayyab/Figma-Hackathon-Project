import posts from "@/blogdetails/data.json";
import Image from "next/image";
import { FaCalendar, FaUser } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";

// Define the type for the page props
interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  // Find the post with the matching ID
  const post = posts.find((p) => p.id === params.id);

  // Handle case where post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="pt-20 w-full">
      <div className="max-w-screen-md mx-auto py-20 px-10">
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">{post.tittle}</h1>
        <div className="my-6 text-slate-600 flex flex-col sm:flex-row gap-6">
          <div className="flex gap-2">
            <FaUser />
            <span>{post.author}</span>
          </div>
          <div className="flex gap-2">
            <FaCalendar />
            <span>4</span> <span>Oct, 2022</span>
          </div>
          <div className="flex gap-2">
            <BiNotepad />
            <span>Handmade</span>
          </div>
        </div>
        <Image
          src={post.src}
          alt={post.tittle}
          height={500}
          width={817}
          loading="lazy"
          className="w-full object-cover object-center rounded-md"
        />
        <p className="text-2xl leading-relaxed py-10">{post.content}</p>
      </div>
    </div>
  );
}
