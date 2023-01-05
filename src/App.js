//file name with capital letter is a component

import Lists from "./Lists";

function App() {
  return (
    <div>
        <div> From app</div>
      {/*Prop or propoerties we are passing sigle prop list = "my list" so it goes insid the object so we can destrucutre here we passed list 
    , we need to go inside list component so we should go in list component and get so ?? 
    go inside list comonent from<List lists="My List" /> */}
      <Lists />
    </div>
  );
}

//we need to export to import, use default keyword to export
export default App;
//-> when we have only one export we use default keyword

//named export

// export function App() {
//   return;
//   <div>
//     {/*Prop or propoerties we are passing sigle prop list = "my list" so it goes insid the object so we can destrucutre here we passed list
//     , we need to go inside list component so we should go in list component and get so we */}
//     <List list ="My List" />
//   </div>;
// }
