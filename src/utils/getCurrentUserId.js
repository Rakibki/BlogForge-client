import axios from "axios";


const getCurrentUserid = async (email) => {
  const res = await axios.get(`http://localhost:4000/currentUser/${email}`);
  return res?.data
};

export default getCurrentUserid;
