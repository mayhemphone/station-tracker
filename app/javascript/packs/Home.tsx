import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Home = ({}: Props) => {
  return (
    <div>
      <h1>Home</h1>
      <h5>Models</h5>
      <ul>
        <li>
          <Link to="animals">Animals</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
