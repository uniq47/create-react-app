//file name with capital letter is a component
import { useState } from "react";

function App() {
  //we can supply array objects but wont getit like this
  //const state = useState("Hello");
  //patter we see is
  // in place of state or setState we can use any name s'
  //state updating function here is setConst for count
  //created a state and restered or set hte value to 0
  //states wull change later on
  //state here is count and is a number here as a data type
  // for object useState({age: 30, name: "John"}})
  //count.age
  const [person, setPerson] = useState({ age: 30, name: "John" });
  const [count, setCount] = useState(0);
  console.log(person);
  // need to be care ful where we are , we are insdie jsx so needd to go inside
  //  js useing {}  so we cna get hte count
  // java script lgic states here aboter the comonent afte the return
  //setCount()
  // we we click the button we are calling the setCount function

  //wont execute executed  before the componet is rendered
  //then it oes to the return statement
  // when we click on the button it will call the clickhandler function its called rerendering
  //best pattern  to upadate state passs callback funcion and takes previos value
  //with prev Key is comming  on first and secpond  so we need to now preserve the
  //preserve the previous value and update the value  copy the perevioius value
  // we change state like this we chanfe the state
  //we pass the finction you geth the  the previous value
  //and we update it .
  // instead of writing this {age: 30, name: "John"} we (prev)=>{...prev ,age:23}
  // passthe function (prev)copy previous value ...prev create new value age =23
  // clickhandler will run once when the state is changinig
  // but App function is  will render twice
  function ageHandler() {
    setPerson((prev) => ({ ...prev, age: prev.age + 1 }));
    //setCount(count+1)
    // setCount(() =>  count+1);
    // fucntion(prev){
    //  return {...prev + 1, age:23}
  }
  //clickhandeler is a call back function works whe nclick me is clicked
  // we are calling the clickhandler function on  onCLick event is triggered// when we click on the function
  // we call clickhandler function
  //componets rerenders calling twice ,
  // once hw app is started second whne we click on the botton
  // state --> job to make somethign happen when user interacts with the app

  function countHandler() {
    setCount(() => count + 1);
  }
  return (
    <div>
      {person.age}
      <button onClick={ageHandler}>Click ME</button>
      <br />
      <button onClick={countHandler}>Click button</button>
      {count})
    </div>
  );
}

export default App;
