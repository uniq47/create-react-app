import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  console.log("before useEffect");

  console.log(user);
  console.log(user?.title)
  useEffect(() => {
    console.log("inaise use effect");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  console.log("after useEffect");
     //check if there is user, if yes then display the title else display loading
  return <div>{user?.title || <h1>loading...</h1>}</div>;
  // user? user.title : <h1>Loading...</h1>
  //if user not defined 
  //user?.title: <h1>Loading...</h1> means that if user is defined then only check for title else display loading
}

export default App;



//optional channing operator is used to check if the object is defined or not