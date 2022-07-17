import React from "react";
import { Link, useParams } from "react-router-dom";
import { getAnimal } from "../../queries/useAnimals";

type Props = {};

const Show = ({}: Props) => {
  const { id } = useParams();
  const { animal } = getAnimal(id || "");
  return (
    <div>
      <h1>{animal?.name}</h1>
      <p>Motto: {animal?.motto}</p>
      <Link to="..">&lt;-- Back</Link>
    </div>
  );
};

export default Show;
