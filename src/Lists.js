import List from "./List";

//destructursing the props object and get the list prop
function Lists() {
  console.log(Lists);
  //to sohw list we use it insdie the {} as its a javascript expression
  return (
    <div>
      <div> Multiple list</div>
      <List/>
    </div>
  );
}

export default Lists;
