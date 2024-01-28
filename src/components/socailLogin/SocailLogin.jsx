import { RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProviders";

const SocailLogin = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(authContext);

  const hanldeGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => console.log(e));
  };

  const handleGithub = () => {
    loginWithGithub()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-3">
        <div
          onClick={hanldeGoogle}
          className="p-3 cursor-pointer shadow-md shadow-[#fb2576] transition-all rounded-full border-[#fb2576] text-[#fb2576] border-2"
        >
          <RiGoogleFill />
        </div>
        <div
          onClick={handleGithub}
          className="p-3 cursor-pointer shadow-md shadow-[#fb2576] transition-all rounded-full border-[#fb2576] text-[#fb2576] border-2"
        >
          <FaGithub />
        </div>
        <div className="p-3 cursor-pointer shadow-md shadow-[#fb2576] transition-all rounded-full border-[#fb2576] text-[#fb2576] border-2">
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default SocailLogin;
