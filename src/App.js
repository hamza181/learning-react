import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // useState change data in DOM at run time
  const [repos, setRepos] = useState([{}]);

  // useEffect is used to fetch API
  // useEffect take two parameters 1. call back function 2. array
  useEffect(async () => {

    //  async k lye function ma function banaya aur function ko usi function ma call kya
    // function getRepos(){
      
    // }

    // with async awaits
    const response = await fetch("https://api.github.com/users/hamza181/repos");
    const data = await response.json();

    console.log(data);
    setRepos(data);;
    console.log(repos);

    // console.log(repos.name)

    // fetch api without async await
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setData(json);
    //   });
    // .then means it will return a promise
  }, []);

  return (
    <div className="App">
      <h3>Fetch API</h3>

      <ul>
        {repos.map((repoObj, ind)=>{
          return(<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
