import React, { useState, useEffect } from "react";
import "./App.css";
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
  return <div className = "rootElement">{user?.title || <h1>loading...</h1>}</div>;
  // user? user.title : <h1>Loading...</h1>
  //if user not defined 
  //user?.title: <h1>Loading...</h1> means that if user is defined then only check for title else display loading
}

export default App;

// side effect, getting form external server orapi so , itwill take some time getting that 
//data from external api this code is async storing in user, after a whole m 
// react is always watching the state change when it happens 
//it rerenders so we see loading and the tile after it the actual data is fetched
// we initially saw loading because user was null and later we saw the actual content. similar to loading 
// and seeing for user?.title 
//optional channing operator is used to check if the object is defined or not