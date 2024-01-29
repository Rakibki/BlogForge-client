import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import FeaturedBlogs from "../../components/FeaturedPosts/FeaturedBlogs";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProviders";
import Noticilation from "../../utils/Noticilation";
import UUID from "uuid-int";
import userImg from "../../assets/user.png"

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

  const { isPending: isPending2, data: comments, refetch } = useQuery({
    queryKey: ["comments"],
    enabled: !!data,
    queryFn: async () => {
      const res = await axiosSucure.get(`/cooments/${data?.Id}`);
      return res?.data;
    },
  });

  if (isPending && isPending2) {
    return <Loader />;
  }

  const handleComment = async (e) => {
    e.preventDefault();

    if (!user && !user?.email) {
      return Noticilation("warn", "Please login first");
    }

    const commentData = {
      body: e.target.comment.value,
      blogId: data?.Id,
      id: generator.uuid(),
      name: user?.displayName,
      email: user?.email,
    };

    const res = await axiosSucure.post("/comment", commentData);
    console.log(res);
    refetch()
  };

  return (
    <>
      <div className="gap-4 p-3 lg:grid grid-cols-6 my-10">
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

            {/* comment List */}
            <div>
              {comments?.length < 1 && <p className="text-lg">No comments {comments?.length}</p>}
              <div>
                {
                  comments?.map((comment) => {
                    return <div className="flex items-center" key={comment.id}> 
                     <img className="w-[50px]" src={userImg} alt="" />
                      <h1 className="text-lg">{comment?.body}</h1>
                    </div>
                  })
                }
              </div>
            </div>
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
