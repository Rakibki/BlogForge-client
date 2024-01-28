import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";

const Blogs = () => {
  const { isPending, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetch("blogs.json").then((res) => res.json()),
  });


  if (isPending) {
    return <Loader />;
  }

  return <div>
    
  </div>;
};

export default Blogs;
