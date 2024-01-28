import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../loader/Loader";

const FeaturedBlogs = () => {
  const axiosSucure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["FeatureBlogs"],
    queryFn: async () => {
      const res = await axiosSucure.get("/blogs");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="w-full bg-white">
      <h1 className="text-3xl mb-6 font-semibold">Featured posts</h1>

      <div className="w-full flex flex-col gap-6">
        {data?.slice(0, 3).map((blog) => {
          return (
            <div className="grid gap-2 grid-cols-6" key={blog?.id}>
              <img className="col-span-2 rounded-xl" src={blog?.image} alt="" />
              <div className="col-span-4">
                <h1>{blog?.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBlogs;