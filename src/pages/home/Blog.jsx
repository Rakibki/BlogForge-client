import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import getLocalStor from "../../utils/localStoreg";
import Noticilation from "../../utils/Noticilation";

const Blog = ({ blog }) => {
  const handleBoolMark = (id) => {
    const bookMarkList = getLocalStor("bookMarkList");
    const isExciting = bookMarkList?.find((item) => item === id);
    if (isExciting) {
      return Noticilation("warn", "already marked");
    } else {
      bookMarkList.push(id);
      const bookMarkListStringfy = JSON.stringify(bookMarkList);
      localStorage.setItem("bookMarkList", bookMarkListStringfy);
    }
  };

  return (
    <div className="lg:grid bg-white p-4 relative hover:shadow-xl rounded-xl shadow-md gap-3 grid-cols-6">
      <div className="col-span-2">
        <img className="rounded-2xl" src={blog?.image} alt="" />
      </div>
      <div className="col-span-4 px-6">
        <h1 className="text-2xl mb-3">{blog?.title}</h1>
        <h1 className="text-lg">
          {blog?.body.slice(0, 290)}...{" "}
          <Link to={`/blog/${blog?.Id}`}>
            <p className="text-[#fb2576] inline cursor-pointer hover:underline">
              See More
            </p>
          </Link>{" "}
        </h1>
      </div>
      <div
        onClick={() => handleBoolMark(blog?.Id)}
        className="absolute cursor-pointer top-4 right-4"
      >
        <CiBookmark className="text-2xl" />
      </div>
    </div>
  );
};

export default Blog;
