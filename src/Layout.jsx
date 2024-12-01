import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";

const App = React.lazy(() => import("./App"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const AllProjects = React.lazy(() => import("./components/AllProjects"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense>
        <App />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense>
        <ErrorPage />
      </React.Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <React.Suspense>
        <AllProjects />
      </React.Suspense>
    ),
  },
]);

export function Layout() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} 