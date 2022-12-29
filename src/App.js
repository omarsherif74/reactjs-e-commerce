import "./App.css";
import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Guest from "./components/Guest";
import List from "./components/List";
import ProductsList from "./components/ProductsList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <div className="App">
    //   <button onClick={()=>setIsLoggedIn(true)}>Login</button>
    //   {isLoggedIn ? <Welcome name="Omar" /> : <Guest />}
    //   <List />
    // </div>
    <ProductsList />
  );
}

export default App;
