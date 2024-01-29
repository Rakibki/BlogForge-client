import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProviders";
import SocailLogin from "../../components/socailLogin/SocailLogin";
import logo from "../../assets/logo-dark.svg";
import { IoMdArrowBack } from "react-icons/io";

const Login = () => {
  const { loginUser } = useContext(authContext);
  const naviagate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
    naviagate("/");
  };

  return (
    <div className="bg-[#f9f9ff] flex items-center h-screen">
      <div className="bg-[#fff] relative rounded-3xl shadow-2xl p-10 w-[60%] lg:w-[35%] mx-auto">
        <Link to={"/"}>
          <div className="absolute px-2 py-1 hover:border-[#fb2576] cursor-pointer transition-all hover:text-[#fb2576] gap-2 rounded-full border-[1px] flex items-center left-[35%] -top-3">
            <IoMdArrowBack />
            <p>Back to home</p>
          </div>
        </Link>

        <form onSubmit={handleLogin}>
          <div className="flex justify-center mb-6">
            <img className="w-32" src={logo} alt="" />
          </div>
          <h1 className="text-center font-semibold text-3xl text-black mb-2">
            Welcome back!{" "}
          </h1>
          <h1 className="text-center text-[#2d3350] text-xl mb-4">
            Sign into your account for full access
          </h1>

          <div className="relative mt-3">
            <input
              type="email"
              name="email"
              className="bg-[#fff] w-full rounded-full border-[1px] border-[#dadce5] placeholder:text-[#dadce5] text-[#2d3350] py-2 pl-12 pr-6 text-lg outline-none"
              placeholder="E-mail"
            />
            <MdOutlineMail className="absolute text-[#dadce5] text-xl left-4 top-[30%]" />
          </div>

          <div className="relative mt-3">
            <input
              type="password"
              name="password"
              className="bg-[#fff] w-full rounded-full border-[1px] border-[#dadce5] placeholder:text-[#dadce5] text-[#2d3350] py-2 pl-12 pr-6 text-lg outline-none"
              placeholder="Password"
            />
            <CiLock className="absolute text-xl left-4 text-[#dadce5] top-[30%]" />
          </div>

          <div className="mt-4 mb-4">
            <button
              type="submit"
              className="py-2 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full"
            >
              LOGIN NOW
            </button>
          </div>

          <h1 className="font-Poppins mb-4 text-center">
            New here?{" "}
            <Link
              className="hover:underline text-[#fb2576] font-semibold"
              to={"/register"}
            >
              Create a New Account
            </Link>
          </h1>
        </form>
        <SocailLogin />
      </div>
    </div>
  );
};

export default Login;
