import React, {useState} from "react"
import Button from "./components/button"
import Dogs from "./components/dog"
import './App.css';

function App() {
  const [dog , setDog] = React.useState({});

const handleSubmit = async() => { 
  const API = "https://dog.ceo/api/breeds/image/random"
  let res = await fetch(API);
  let json = await res.json();
  console.log(json)
  setDog(json.message)};



  return (
    <div className="App">
      <h1>Get a random dog picture!</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      {dog.message ? <Dogs dog={dog} /> :<h2>test</h2> }

    </div>
  )}

export default App;
