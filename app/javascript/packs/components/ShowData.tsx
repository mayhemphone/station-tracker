import React from "react";

type Props = {
  data: any;
};

const ShowData = ({ data }: Props) => {
  return (
    <pre style={{ backgroundColor: "#f0f0f0", padding: "1em" }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default ShowData;
