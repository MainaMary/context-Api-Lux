import React from "react";
import SubGrandChild from "./SubGrandChild";

//npx cra
//npm start
//npm vite@latest

const GrandChild = (props) => {
  console.log(props.name, "garndChild");
  return (
    <div>
      <SubGrandChild name={props.name} />
    </div>
  );
};

export default GrandChild;
