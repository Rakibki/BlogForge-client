import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/loader/Loader";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProviders";

const MyAddedBlog = () => {
  const axiosSucure = useAxiosSecure();
    const {user} = useContext(authContext)

  const { isPending, data } = useQuery({
    queryKey: ["myBlogs"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosSucure.get(`/myBlogs/${user?.uid}`);
      return res?.data;
    },
  });

  console.log(data);

  if (isPending) {
    return <Loader />;
  }

  return <div>MyAddedBlog{data?.length}</div>;
};

export default MyAddedBlog;