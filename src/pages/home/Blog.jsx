import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import getLocalStor from "../../utils/localStoreg";
import Noticilation from "../../utils/Noticilation";

const Blog = ({ blog }) => {
  const handleBoolMark = (id) => {
    const bookMarkList = getLocalStor("bookMarkList");
    console.log(bookMarkList);
    const isExciting = bookMarkList?.find((item) => item === id);
    console.log(isExciting);
    if (isExciting) {
      return Noticilation("warn", "already marked ");
    } else {
      bookMarkList.push(id);
      const bookMarkListStringfy = JSON.stringify(bookMarkList);
      localStorage.setItem("bookMarkList", bookMarkListStringfy);
    }
  };

  return (
    <div className="grid bg-white p-4 relative hover:shadow-2xl rounded-xl shadow-xl gap-3 grid-cols-6">
      <div className="col-span-2">
        <img className="rounded-2xl" src={blog?.image} alt="" />
      </div>
      <div className="col-span-4 px-6">
        <h1 className="text-2xl">{blog?.title}</h1>
        <h1 className="text-lg">
          {blog?.body.slice(0, 300)}...{" "}
          <Link to={`/blog/${blog?.Id}`}>
            <span className="text-[#fb2576] cursor-pointer hover:underline">
              See More
            </span>
          </Link>
        </h1>
      </div>
      <div
        onClick={() => handleBoolMark(blog?.Id)}
        className="absolute cursor-pointer top-3 right-3"
      >
        <CiBookmark className="text-2xl" />
      </div>
    </div>
  );
};

export default Blog;
