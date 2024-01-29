import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import MyAddedBlog from "../pages/myAddedBlog/MyAddedBlog";
import MarkList from "../pages/markList/MarkList";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/dashboard/my-added-blogs",
        element: <MyAddedBlog />
      },
      {
        path: "/dashboard/mark-list",
        element: <MarkList />
      },
      {
        path: "/dashboard/profile",
        element: <Profile />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
