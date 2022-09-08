import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div>loading ... </div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
};

const Home = Loadable(lazy(() => import("../pages/Home/Home.js")));

export default Router;
