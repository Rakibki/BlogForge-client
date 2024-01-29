import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1>Page Not Found</h1>

        <Link to={"/"}>
          <button className="py-2 flex items-center justify-center gap-2 mt-4 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full">
            <IoMdArrowBack /> <p>Go Back Home</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
