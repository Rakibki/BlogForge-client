import logo from "../../assets/logo-dark.svg";
import { Link, NavLink } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import getLocalStor from "../../utils/localStoreg";
import { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProviders";
import { IoMdAdd } from "react-icons/io";
import CreateBlog from "../../components/modals/createBlog/CreateBlog";
import Dropdown from "./Dropdown";

const Navber = ({ children }) => {
  const localStorage = getLocalStor("bookMarkList");
  const { user } = useContext(authContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navItems = (
    <ul className="flex gap-2">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </ul>
  );

  const handleAddBlog = () => {
    setIsOpen(true);
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full p-4 bg-base-300">
          <div className="flex-none block lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="px-2 mx-2">
              <Link to={"/"}>
                <img src={logo} className="w-40" alt="" />
              </Link>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navItems}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer">
                <CiBookmark className="text-2xl" />
                <div className="absolute -top-3 bg-[#fb2576] px-1 text-white rounded-xl -right-1">
                  {localStorage?.length}
                </div>
              </div>

              {user && user?.email ? (
                <div className="flex gap-2">
                  <button
                    onClick={handleAddBlog}
                    className="flex px-4 items-center rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full"
                  >
                    <div className="flex items-center">
                      <IoMdAdd />
                      <p>blog</p>
                    </div>
                  </button>

                  <div className="dropdown dropdown-end">
                    <div role="button" tabIndex={0} className="w-[50px]">
                      <img
                        className="rounded-full border-[1px] border-[#fb2576]"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <Dropdown />
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="py-2 px-6 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navItems}
        </ul>
      </div>
      <CreateBlog
        subtitle={subtitle}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default Navber;
