import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const App = ({}: Props) => {
  // this is where you wrap app wide providers // layouts, etc
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default App;
