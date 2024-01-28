import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routers";
import AuthProvaider from "./providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-[1250px] mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProvaider>
          <RouterProvider router={router} />
        </AuthProvaider>
        <ToastContainer />
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
