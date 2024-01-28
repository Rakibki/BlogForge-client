import Modal from "react-modal";
import uploadeImage from "../../../utils/uploadeImage";

const CreateBlog = ({ modalIsOpen, afterOpenModal, closeModal }) => {
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
    const files = await e.target.imgFile.files[0];
    const image = await uploadeImage(files);
    console.log({ title, body, image });
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
          <h1 className="text-3xl font-semibold">Add A New Blog</h1>

          <form onSubmit={handleSubmit}>
            <div className="relative mt-3">
              <input
                type="text"
                name="title"
                className="bg-[#fff] w-full rounded-full border-[1px] border-[#dadce5] placeholder:text-[#dadce5] text-[#2d3350] py-2 px-8 text-lg outline-none"
              />
              <textarea
                name="body"
                className="bg-[#fff] mt-2 w-full rounded-full border-[1px] border-[#dadce5] placeholder:text-[#dadce5] text-[#2d3350] py-2 px-8 text-lg outline-none"
              />

              <input
                type="file"
                name="imgFile"
                className="bg-[#fff] mt-2 text-white border-none"
                id=""
              />
            </div>
            <button type="submit" className="py-2 px-6 rounded-full hover:opacity-55 transition-all bg-[#fb2576] text-white font-Poppins w-full">
              Post
            </button>
          </form>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateBlog;
