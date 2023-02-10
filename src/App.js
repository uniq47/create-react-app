import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({firstName: "Unique", LastName: "Sapkota"})

  function clickHandler() {
    setCount(count + 1);
  }

  function changeName(){
    setName((a) => ({...a, firstName: "Unique"}))
  }

  return (
    <div>
       {name.firstName  }
      {count}
      <button onClick={clickHandler}>Click here</button>
    </div>
  );
}

export default App;
