import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import Blog from "./Blog";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FeaturedBlogs from "../../components/FeaturedPosts/FeaturedBlogs";

const Blogs = () => {

  const axiosSucure = useAxiosSecure()

  const { isPending, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const  res = await axiosSucure.get("/blogs")
      return res?.data
    }
  });

  if (isPending) {
    return <Loader />;
  }


  return (
    <div className="lg:grid gap-8 mb-10 bg-[#f9f9ff] grid-cols-4">
      <div className="col-span-3 flex flex-col gap-6">
        {data?.map((blog) => (
          <Blog blog={blog} key={blog?.Id} />
        ))}
      </div>
      <div><FeaturedBlogs /></div>
    </div>
  );
};

export default Blogs;
