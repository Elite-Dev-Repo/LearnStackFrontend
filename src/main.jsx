import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Register from "./Register.jsx";
import Tutorials from "./Tutorials.jsx";
import Bookmarks from "./Bookmarks.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/tutorials",
    element: (
      <ProtectedRoutes>
        <Tutorials />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/bookmarks",
    element: (
      <ProtectedRoutes>
        <Bookmarks />
      </ProtectedRoutes>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
