// import React from "react";

// const Todos: React.FC<{ items: string[] }> = (props) => {
//   //props is object type   //generic type FC
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todos;


import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  //props is object type   //generic type FC
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
