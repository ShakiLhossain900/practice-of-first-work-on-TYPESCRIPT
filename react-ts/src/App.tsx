import Todos from "./components/Todos";
import Todo from "./models/todo";

import "./App.css";

function App() {
  const todos = [new Todo("Learn react"), new Todo("Leran TypeScript")];
  return (
    <div>
   
      <Todos items={todos} />

    </div>
  );
}

export default App;

//type script done here if future need that time i will use this typescript 
//and the typescript now skip