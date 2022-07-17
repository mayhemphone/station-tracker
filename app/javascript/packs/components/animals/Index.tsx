import React from "react";
import { Link } from "react-router-dom";
import { destroyAnimal, getAnimals } from "../../queries/useAnimals";
// import ShowData from "../ShowData";

type Props = {};

const Animals = ({}: Props) => {
  const { animals } = getAnimals();

  const deleteItem = async (id: string) => {
    const deletedAnimal = await destroyAnimal(id);
    if (deletedAnimal.animal) {
      console.log("successfull", deletedAnimal);
    } else {
      console.error("error", deletedAnimal.isError);
    }
  };

  const dataRows = animals?.map((animal) => (
    <tr key={animal.id}>
      <td>
        <Link to={`${animal.id}`}>{animal.name}</Link>
      </td>
      <td>{animal.motto}</td>
      <td>
        <Link to={`${animal.id}/update`}>Edit</Link>{" "}
        <a
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => deleteItem(animal.id)}
        >
          Delete
        </a>
      </td>
    </tr>
  ));

  return (
    <div>
      {/* <ShowData data={animals} /> */}
      <table style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Motto</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ outline: "0px solid grey" }}>{dataRows}</tbody>
      </table>
      <Link
        to="create"
        style={{
          display: "inline-block",
          borderRadius: "8px",
          margin: "20px 0",
          padding: "10px",
          backgroundColor: "#aeaeff",
          textDecoration: "none",
        }}
      >
        Create
      </Link>
    </div>
  );
};

export default Animals;
