// import { useState } from "react";
// import Increment from "./components/Increment";
import ConditionalRendering from "./components/ConditionalRendering";
import Json from "./components/Json";

function App() {
  // const tasks = [
  //   { task: "Learn React", isDone: false },
  //   { task: "Learn Core Concepts", isDone: true },
  //   { task: "Learn Hooks", isDone: true },
  // ];



  // const [count, setCount] = useState(0)




  // const [movie, setMovie] = useState([
  //   { name: "Acquaman", ratings: 6.5 },
  //   { name: "Spiderman", ratings: 8.5 }]
  // );

  // const UpdateHandler = () => {
  //   setMovie(movie.map(m => m.name === "Acquaman" ? {...movie, name: "John Wick 3", ratings: 9.0} : m))
  // }

  // const AddNewMoviewHandler = () => {
  //   setMovie([...movie, {name: "Superman", ratings: 7.8}])
  // }



  return (
    <>
    <Json/>


      {/* <ConditionalRendering tasks={tasks}/> */}


      {/* { movie.map (m => (
      <ul key={Math.random()}>
        <li> {m.name} </li>
        <li> {m.ratings} </li>
      </ul>
    )) }
      <button onClick={UpdateHandler}>Update New Movie</button>
      <button onClick={AddNewMoviewHandler}>Add New Movie</button>



      <Increment count = {count} onclickHandler={() => setCount(count + 1)} /> */}
    </>
  );
}

export default App;
