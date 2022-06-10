import React, {useState} from "react"
import Button from "./components/button"
import Dog from "./components/dog"

export default function App() {
  const [dog , setDog] = useState({});

const handleSubmit = async() => { 
  const API = "https://dog.ceo/api/breeds/image/random"
  let res = await fetch(API);
  let json = await res.json();
  console.log(json)
  setDog(json)};



  return (
    <div className="App">
      <h1>Get a random dog picture!</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      {dog.message ? 
      <Dog dog={dog} /> : <h2>Get it!</h2> }

    </div>
  )}

