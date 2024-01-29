import Modal from "react-modal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Noticilation from "../../../utils/Noticilation";

const UpdateBlog = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  updateBlog,
  refetch
}) => {
  const axiosSecure = useAxiosSecure();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const blogDada = { title, body };
    const res = await axiosSecure.put(`/blog/${updateBlog?.Id}`, blogDada);

    if (res.data) {
      Noticilation("success", "Blog Updated Successfully");
      refetch()
      closeModal()
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-[550px]">
          <h1 className="text-3xl font-semibold">Update Blog</h1>

          <form onSubmit={handleSubmit}>
            <div className="relative mt-3">
              <input
                defaultValue={updateBlog?.title}
                type="text"
                name="title"
                className="bg-[#fff] w-full rounded-full border-[1px] border-[#dadce5] placeholder:text-[#dadce5] text-[#2d3350] py-2 px-8 text-lg outline-none"
              />
              <textarea
                defaultValue={updateBlog?.body}
                name="body"
                className="bg-[#fff] mt-2 w-full rounded-full border-[1px] border-[#dadce5] placeholder:text-[#dadce5] text-[#2d3350] py-2 px-8 text-lg outline-none"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-6 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full"
            >
              Post
            </button>
          </form>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateBlog;
