import React from "react";
import GrandChild from "./GrandChild";
const Child = ({ name }) => {
  console.log(name, "child ");
  return (
    <div>
      <GrandChild name={name} />
    </div>
  );
};

export default Child;
