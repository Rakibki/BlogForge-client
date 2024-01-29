import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="p-4">
      <ul>
        <li>
          <Link to={"/dashboard/my-added-blogs"}>My Added Blogs</Link>
        </li>
        <li>
          <Link to={"/dashboard/mark-list"}>Mark List</Link>
        </li>
        <li>
          <Link to={"/dashboard/profile"}>Profile</Link>
        </li>
      </ul>

      <button className="py-2 px-6 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full">
        Outout
      </button>
    </div>
  );
};

export default Dropdown;
