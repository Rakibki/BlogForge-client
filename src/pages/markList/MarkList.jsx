import Loader from "../../components/loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import getLocalStor from "../../utils/localStoreg";
import { useQuery } from "@tanstack/react-query";
import { CgPlayListRemove } from "react-icons/cg";

const MarkList = () => {
  const localStorageList = getLocalStor("bookMarkList");
  const axiosSucure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["LsBlogs"],
    queryFn: async () => {
      const res = await axiosSucure.get(`/blogs`);
      return res?.data;
    },
  });

  const bookMarkListItems = data?.filter((item) =>
    localStorageList.includes(item?.Id)
  );

  if (isPending) {
    return <Loader />;
  }

  const handleUnMark = (id) => {
    const index = localStorageList.findIndex((item) => item == id);
    localStorageList.splice(index, 1);
    const bookMarkListStringfy = JSON.stringify(localStorageList);
    localStorage.setItem("bookMarkList", bookMarkListStringfy);
  };

  return (
    <div className="flex flex-col gap-4 my-4">
      {bookMarkListItems?.map((blog) => {
        return (
          <div
            className="w-full relative gap-3 grid items-center grid-cols-6 p-6 border-2"
            key={blog.Id}
          >
            <div className="col-span-2">
              <img src={blog?.image} alt="" />
            </div>
            <div className="col-span-4">
              <h1 className="text-3xl mb-3 font-semibold">{blog?.title}</h1>
              <h1 className="text-lg">{blog?.body}</h1>
            </div>

            <div className="absolute top-2 right-2">
              <CgPlayListRemove
                onClick={() => handleUnMark(blog.Id)}
                className="text-4xl cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarkList;
