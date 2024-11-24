import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AllProjects from "./components/AllProjects.jsx";
import Layout from "./Layout.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AllProjects />
        </React.Suspense>
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
