import React from "react";
import { useForm } from "react-hook-form";
import Animal, { AnimalCreate } from "../../types/Animal";

type Props = {
  onSubmit: any;
  data?: Animal;
  errors: any;
};
const AnimalForm = ({ onSubmit, data, errors }: Props) => {
  const { register, handleSubmit } = useForm<AnimalCreate>();

  // const formErrors = Object.entries(errors).map((item) => (
  //   <div key={item[0]} style={{ color: "red" }}>
  //     Field '{item[0]}' {item[1]?.message}
  //   </div>
  // ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name </label>
        <input defaultValue={data?.name || ""} {...register("name")} />
      </div>

      <div>
        <label htmlFor="motto">Motto </label>
        <input
          defaultValue={data?.motto || ""}
          // {...register("motto", { required: "is required" })}
          {...register("motto")}
        />
      </div>

      <input type="submit" />

      {errors && <pre>{JSON.stringify(errors, null, 2)}</pre>}
    </form>
  );
};

export default AnimalForm;
