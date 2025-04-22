import { useState } from "react";
import Comp1 from "./components/Comp1";

function App() {
  const [count, setCount] = useState(0)

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
    {/* { movie.map (m => (
      <ul key={Math.random()}>
        <li> {m.name} </li>
        <li> {m.ratings} </li>
      </ul>
    )) }

      <button onClick={UpdateHandler}>Update New Movie</button>
      <button onClick={AddNewMoviewHandler}>Add New Movie</button> */}
      <Comp1 count = {count} onclickHandler={() => setCount(count + 1)} />
    </>
  );
}

export default App;
