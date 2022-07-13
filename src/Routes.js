import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";

const MyRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/" element={<Navigate to="home" />} />
      </Routes>
    </Fragment>
  );
};

export default MyRoutes;
