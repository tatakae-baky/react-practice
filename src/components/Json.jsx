import { useEffect, useState } from "react";

// Remember the sequence that react usually render the component before taking the accountabilty of useEffect hook, so in that case as i am trying to access the posts.name , it will be undefined as initially we have given posts nothing like the useState() is empty.

const Json = () => {
  // const [posts, setPosts] = useState()
  // useEffect(()=> {
  //     fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then(res => res.json())
  //     .then (data => setPosts(data))
  // },[])


// Now, what i have done here is that there will be a conditional rendering like first it will render "Loading..." as variable loading is set to true then when useEffect() will be called and it will get the data and the variable loading will be set to false and will re-render the component and the post name will be shown.

  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? "Loading..." : <h3> Post Name: {posts[0].name} </h3>}


{/* you could do this conditional chain operation as well when you are not sure whether you will get the data or not. Its like checking if we have the post name render it otherwise don't. */}
      {/* <h1> {posts[0]?.name} </h1>  */}
    </div>
  );
};

export default Json;
