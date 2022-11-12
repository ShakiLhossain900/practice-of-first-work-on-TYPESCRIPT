import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  //props is object type   //generic type FC
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
