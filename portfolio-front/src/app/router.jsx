import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:slug", element: <ProjectDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
