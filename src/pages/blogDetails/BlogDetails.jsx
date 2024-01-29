import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import FeaturedBlogs from "../../components/FeaturedPosts/FeaturedBlogs";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProviders";
const UUID = require('uuid-int');


const BlogDetails = () => {
  const { id } = useParams();
  const axiosSucure = useAxiosSecure();
  const { user } = useContext(authContext);
  const uid = 0;
  const generator = UUID(uid);

  const { isPending, data } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosSucure.get(`/blog/${id}`);
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  const handleComment = (e) => {
    e.preventDefault();
  
    const blogData = {
      body = e.target.comment.value;
      blogId = data?.Id,
      id: ,
      name: user?.displayName,
      email: user?.email
    }

  };

  return (
    <>
      <div className="gap-4 grid grid-cols-6 my-10">
        <div className="col-span-4 w-full">
          <div className="w-full">
            <img className="h-[500px] w-full" src={data?.image} alt="" />
          </div>

          <div>
            <h1 className="text-3xl my-5">{data?.title}</h1>
            <p>{data?.body}</p>
          </div>

          {/* comment */}
          <div className="mt-6">
            <form onSubmit={handleComment} className="flex items-center w-full">
              <input
                className="p-3 border-b-2 rounded-2xl outline-none w-full"
                placeholder="Add A Comment"
                type="text"
                name="comment"
              />
              <button
                type="submit"
                className="py-2 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins px-6"
              >
                Comment
              </button>{" "}
            </form>
          </div>
        </div>
        <div className="col-span-2">
          <FeaturedBlogs />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
