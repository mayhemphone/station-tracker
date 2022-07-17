import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAnimal, updateAnimal } from "../../queries/useAnimals";
import { AnimalResponse } from "../../types/Animal";
import AnimalForm from "./AnimalForm";

type Props = {};

const Update = ({}: Props) => {
  const { id } = useParams();
  const { animal } = getAnimal(id || "");

  const [errors, setErrors] = useState<any | null>(null);
  const navigate = useNavigate();

  const submitUpdate = async (data: any) => {
    //udpate the content and navigate if successful

    const updatedAnimal: AnimalResponse = await updateAnimal(id || "", data);

    if (updatedAnimal.animal) {
      console.log("success", updatedAnimal);
      // navigate back
      navigate(-1);
    } else {
      console.error("errored", { updatedAnimal });
      setErrors(updatedAnimal.isError);
    }
  };

  return (
    <div>
      <h1 style={{ margin: 0 }}>Update {animal?.name}</h1>
      <Link to="../">&lt;-- Back</Link>
      <br />
      <br />
      <AnimalForm onSubmit={submitUpdate} data={animal} errors={errors} />
    </div>
  );
};

export default Update;
