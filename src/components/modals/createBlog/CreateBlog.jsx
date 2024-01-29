import Modal from "react-modal";
import uploadeImage from "../../../utils/uploadeImage";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { authContext } from "../../../providers/AuthProviders";
import Loader from "../../loader/Loader";
import { useNavigate } from "react-router-dom";
import Noticilation from "../../../utils/Noticilation";
import Title from "../../title/Title";
import { MdClose } from "react-icons/md";

const CreateBlog = ({ modalIsOpen, afterOpenModal, closeModal }) => {
  const axiosSecure = useAxiosSecure();
  const { user, loadding } = useContext(authContext);
  const navigate = useNavigate();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  if (loadding) {
    return <Loader />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const files = await e.target.imgFile.files[0];
    const image = await uploadeImage(files);
    const userId = await user?.uid;
    const blogDada = { title, body, image, userId };
    const res = await axiosSecure.post("/blog", blogDada);
    if (res.data) {
      Noticilation("success", "Blog Added Successfully");
      navigate("/dashboard/my-added-blogs");
    }
  };

  return (
    <div className="z-50">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-[550px] relative p-6">
          <div>
            <Title title={"Add A New Blog"} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative mt-3">
              <input
                placeholder="Blog Title"
                type="text"
                name="title"
                className="bg-[#fff] placeholder:text-[#2d3350] w-full rounded-lg border-[1px] border-[#dadce5]] text-[#2d3350] py-2 px-5 text-lg outline-none"
              />
              <textarea
              rows={4}
                name="body"
                placeholder="Blog Body"
                className="bg-[#fff] mt-2 placeholder:text-[#2d3350] w-full rounded-lg border-[1px] border-[#dadce5] py-2 px-5 text-lg outline-none"
              />

              <input
                type="file"
                name="imgFile"
                className="bg-[#fff] mt-2 text-white border-none"
                id=""
              />
            </div>
            <button
              type="submit"
              className="py-2 px-6 mt-4 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full"
            >
              Post
            </button>
          </form>
          <div className="absolute top-2 right-2" onClick={closeModal}>
            <MdClose className="text-2xl cursor-pointer" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateBlog;
