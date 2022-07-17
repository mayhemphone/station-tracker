import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAnimal } from "../../queries/useAnimals";
import { AnimalResponse } from "../../types/Animal";
import AnimalForm from "./AnimalForm";

type Props = {};

const Create = ({}: Props) => {
  const [errors, setErrors] = useState<any | null>(null);
  const navigate = useNavigate();

  const submitCreate = async (data: any) => {
    //create the content and mutate the key
    const createdAnimal: AnimalResponse = await createAnimal(data);

    if (createdAnimal.animal) {
      console.log("success", createdAnimal);
      // navigate back
      navigate(-1);
    } else {
      console.error("errored", { createdAnimal });
      setErrors(createdAnimal.isError);
    }
  };

  return (
    <div>
      <h1 style={{ margin: 0 }}>Create Animal</h1>
      <Link to="../">&lt;-- Back</Link>
      <br />
      <br />
      <AnimalForm onSubmit={submitCreate} errors={errors} />
    </div>
  );
};

export default Create;
