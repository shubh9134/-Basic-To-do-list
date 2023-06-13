import React, { useState } from "react";
import List from "./list.js";


function App() {
  const[input,setInput] = useState("")
  const[arr,setArr] = useState([])


  const addElememt = (e) =>{
    e.preventDefault();
    const nextArr = [...arr,input]
    setArr(nextArr)
    setInput("")
  }

  function removeitem(md){
    console.log("clicled")
    console.log(arr)
     const nex = arr.filter((items,index) =>{
      console.log(index)
      console.log(md)
      if(index !== md)
        return items;
     })
     setArr(nex)
     return 

  }
  return (
    <div className="main"> 
    <h1> To -do List</h1>
      <form className="main">
      <input type = "text" placeholder="Add a item" value = {input}   onChange={(e) => {setInput(e.target.value)}} />
      <button className="button"  onClick = {addElememt} > Add item </button>
      <p className="bnd"> {input}</p>
      </form>
      <ol className="ol">
        {arr.map((items,index) => {
          return <List item = {items} index = {index} id = {index} onSelect = {removeitem}/>
        })}
      </ol>
    </div>
  );

    
};

export default App;
