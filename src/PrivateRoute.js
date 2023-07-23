import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  let isAuth = sessionStorage.getItem("name");

  return <>{isAuth ? <Outlet /> : <Navigate to="/" />}</>;
};

export default Protected;
