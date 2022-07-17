import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = ({}: Props) => {
  return (
    <div style={{ outline: "1px solid limegreen" }}>
      <Outlet />
    </div>
  );
};

export default Layout;
