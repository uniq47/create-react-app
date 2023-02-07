//file name with capital letter is a component
import { useState } from "react";
import Header from "./components/Header";

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
  //***************************
  //1) use state hook is a function returing a array of two elements first is the state(valye) and second is the state updating function(function), 
  // count is state which keep s on changing and setCount is the state updating function,( the function is soley made to update the state)
  // we are destructuring the array which is returned by useState hook and we are storing the first element in count and second element in setCount
  //2) we can use any name for the state and state updating function
  //3) we can use useState hook multiple times in a component
  //4) we can use useState hook inside a function component
  //5) we can use useState hook inside a custom hook
  //6) we can use useState hook inside a class component
  //7) we can use useState hook inside a functional component
  //8) we can use useState hook inside a custom hook
  //9) we can use useState hook inside a class component
  // 
// use state accepts integers, strings, objects, arrays, booleans, null, undefined
  //****//
  //count.age
  ////const state = useState(age:30);
  /// const setPerson = userState(name: "John") 
  //// updating key word we use set ex setPerson

  const [person, setPerson] = useState({ age: 30, name: "John" });
  // console
  // we can use setCount so for that we have to have a condition so button can be a example for that, 
  // so when ever we click the button the function setCount will be called and the value of count will be incremented by 1
  const [count, setCount] = useState(0);

  // need to be care ful where we are , we are insdie jsx so needd to go inside
  //  js useing {}  so we cna get hte count
  // java script lgic states here aboter the comonent afte the return
  //setCount()
  // we click the button we are calling the setCount function

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
  // spread , remove the object and spread those properties here, 
  // so why rendering, its because its creating a new obeject every time, 
  // state is not changing but application is rerendering 
  // object everytime not primitive(1 ) value so state was not chanigng 
  //lets say we want to change age
  //....prev (any value) copeing theo bejct in ... orev
  // override {} to change state 
  // passa  a function and get the prev value and update it using {..prev, age:40}
  //state will rerender your application
  // wen need to be careful so need to chagnge it with the help of a function 
  //
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
// in JS we write it in camel case 

//****************
;// on click we will be listining to some function in the function we will besuing setCount function
// countHandler is a call back function is  called when we click on the button, here it;s calling setCount function 
// call back function is a function which is passed as a parameter to another function ,
// it will be called once we click, it will becalled upon click event is fired, when we click the button the click hander is called
// components keeps on rerendinng when the state is changing so lets try to change the stateall the time we can use count  
// when we click the 0 is the current  value of the application is executing when we click 0 pecome the previous value and we click the button agin the next valuewill also be 1 so late it wont be rerende
// when we get the previous value count lets increment it by 1 all the time so lets see what happens, 
// state keeps on changing so the application keeps on rerendering, this is how state works.
//
  function countHandler() {
    setCount(() => count + 1);
  }
  return (
    <>
      <Header />
      <div>
        {person.age}
        <button onClick={ageHandler}>Click</button>
        <br />
        <button onClick={countHandler}>Click button</button>
        {count})
      </div>
    </>
  );
}

export default App;
//what we pass value inside the setCount function  in use State the value changes, so we  
// when serCount is updated the app will onece again be called, this components rerenders
// reexucuted called once again , it is calling twice now once when the application first started and second when we click on the botton onCLick,
// function wont be called when it rerenders all but the functoin which is called onCLick  
//components rendering twice to check id its changing ot not, but if the statte cange is not there component wont change 
// we will always be sending the new value 
//copy new stance of the object and update the value dont mutate the object

