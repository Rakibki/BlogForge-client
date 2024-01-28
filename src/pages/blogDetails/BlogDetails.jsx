import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import FeaturedBlogs from "../../components/FeaturedPosts/FeaturedBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosSucure = useAxiosSecure();

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

  return (
    <div className="gap-4 grid grid-cols-6 my-10">
      <div className="col-span-4 w-full">
        <div className="w-full">
          <img className="h-[500px] w-full" src={data?.image} alt="" />
        </div>

        <div>
          <h1 className="text-3xl my-5">{data?.title}</h1>
          <p>{data?.body}</p>
        </div>
      </div>
      <div className="col-span-2">
        <FeaturedBlogs />
      </div>
    </div>
  );
};

export default BlogDetails;
