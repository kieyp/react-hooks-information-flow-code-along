import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const[childColor,setchildColor]=useState("green")


  function handleColor(newChildColor){
    const newrandomcolor=getRandomColor();
    setColor(newrandomcolor);
    setchildColor(newChildColor)

  }
console.log(handleColor)
  

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child  color={childColor}onChangeColor={handleColor}/>
      <Child color={childColor}onChangeColor={handleColor}/>
     
    </div>
  );
}

export default Parent;
