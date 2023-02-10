import React, { useState, useEffect } from "react";
//we will not return anything from useEffect hook like we do in a normal function or usestate hook
//we will pass a fucntion inside the useEffect hook as an argument
//we did i in map, filter, it's called callback function
//it will be called later when something happens or it will be called later
// itself by react, it is managed by useeffect hook
//1) first it woll fun the jsx code and then it will run the useEffect hook
// it will run after everything after the component is completed
//  it will re run when the componenent will rerender(calling the function twice)
// when the state is changed,during the process also ti will effect at the end
// cant use set count  inside the as it is infinite loop
function App() {
  const [count, setCount] = useState(0);
  console.log("before useEffect");

  //useEffect( function () {},[]) will run at theend ,
  //[] is the dependency array, it will run only once, when we want to
  //[count] the value count is changing so it will go in the use eddect hook, once itwill use useEffect hook
  //we cna pass another argument to the useEffect hook
  useEffect(() => {
    console.log("inaise use effect");
  });
  // we are going to pase some data from external apo, that the popular use case of useEffect hook hook
  //  we interact with data from external api (server)
  //
  console.log("after useEffect");
  return (
    <div>
      {console.log("jsx")}
      <h1>hello</h1>
    </div>
  );
}

export default App;

// main thing of a useeffect hook is to create side effects
