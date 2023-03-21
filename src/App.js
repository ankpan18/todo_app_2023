import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App=()=>{
  const [inputList, setInputList]=useState("");
  const [Items,setItems]=useState([]);

  
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };



  const listOfItems=()=>{
      setItems((oldItems)=>{
        return [...oldItems,inputList];
      })
      setInputList("");
  };

  const deleteItems=(id)=>{
    
    console.log('deleted');
    setItems((oldItems=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id ; });
    }));
};



  return(
<div className="main_div">
    <div className="center_div">
      <br/>
      <h1>Todo App</h1>
      <br/>
      <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent}/>
      <button onClick={listOfItems}> + </button>
      <ol>
        

     {Items.map((itemval,index)=>{
          return <ToDoLists key={index} id={index} text={itemval}
          onSelect={deleteItems}/>;
          
        })} 
        
         
        
      </ol>
    </div>
    <h2 style={{    position: "absolute",
    bottom: "0px",
    color: "#3f27c8"
}}>Made By Ankur Panthri</h2>
</div>
)

};

export default App;
