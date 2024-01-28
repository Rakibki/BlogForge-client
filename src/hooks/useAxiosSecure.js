import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:4000",
  });

  return axiosSecure;
};

export default useAxiosSecure;
