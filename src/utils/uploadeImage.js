import axios from "axios"

const uploadeImage = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=39dd76e8fdda7e46d4d734a809c09d5a`, formData)
    return res?.data?.data?.url
}

export default uploadeImage