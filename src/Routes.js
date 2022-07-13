import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";

const Yip = React.lazy(() => import("./pages/Yip/Yip"));

const MyRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/yip" element={<Yip />} />
      </Routes>
    </Fragment>
  );
};

export default MyRoutes;
