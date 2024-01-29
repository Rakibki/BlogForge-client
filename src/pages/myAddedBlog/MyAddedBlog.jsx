import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/loader/Loader";
import { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProviders";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Noticilation from "../../utils/Noticilation";
import UpdateBlog from "../../components/modals/updateBlog/UpdateBlog";
import Title from "../../components/title/Title";

const MyAddedBlog = () => {
  const axiosSucure = useAxiosSecure();
  const { user } = useContext(authContext);
  const [updateBlog, setUpdateBlog] = useState({})

  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { isPending, data, refetch } = useQuery({
    queryKey: ["myBlogs"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosSucure.get(`/myBlogs/${user?.uid}`);
      return res?.data;
    },
  });

  const hadnelDelete = async (id) => {
    const res = await axiosSucure.delete(`/blog/${id}`);
    if (res?.data) {
      Noticilation("success", "deleted successfully");
      refetch();
    }
  };

  const hadnelUpdate = (blog) => {
    setIsOpen(true);
    setUpdateBlog(blog)
  };



  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="flex-col gap-4 my-4">
      
      <div className="mt-4">
        <Title title={"My Added Blogs"} />
      </div>

      {
        data.length < 1 && <h1 className="my-6 text-center">You have no posts</h1>
      }

      {data?.map((blog) => {
        return (
          <div
            className="w-full relative gap-3 lg:grid items-center grid-cols-6 p-6 border-2"
            key={blog.Id}
          >
            <div className="col-span-2">
              <img src={blog?.image} alt="" />
            </div>
            <div className="col-span-4">
              <h1 className="text-3xl mb-3 font-semibold">{blog?.title}</h1>
              <h1 className="text-lg">{blog?.body}</h1>
            </div>

            <div className="absolute right-3 top-2">
              <MdDeleteOutline
                onClick={() => hadnelDelete(blog?.Id)}
                className="text-3xl text-[#fb2576] cursor-pointer mb-3"
              />
              <CiEdit
                onClick={() => hadnelUpdate(blog)}
                className="text-3xl text-[#fb2576] cursor-pointer"
              />
            </div>
          </div>
        );
      })}
      <UpdateBlog
        subtitle={subtitle}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
        modalIsOpen={modalIsOpen}
        updateBlog={updateBlog}
        refetch={refetch}
      />
    </div>
  );
};

export default MyAddedBlog;
