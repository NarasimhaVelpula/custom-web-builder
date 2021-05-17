import './App.css';
import styled from "styled-components";
import { useState } from 'react';
const Leftbox=styled.div`
    background-color:lightblue;
    float:left; 
    width:20%;
    height:100vh;
    margin-right:10px;
    padding:10px;
  `;
const Middlebox=styled.div`
float:left; 
background:${props=>props.bgcolor};
width:57%;
height:100vh;
border:1px solid black;
 `;
const Rightbox=styled.div`
  float:right;
  background:gray;
  width:20%;
  height:100vh;
`;
function App() {
  const [bgcolor,setBgcolor]=useState("white")
  return (
    <div className="App">
        <Leftbox>
            <b>Background Color</b><input type="color" onChange={e=>{setBgcolor(e.target.value)}} />
        </Leftbox>
        <Middlebox  bgcolor={bgcolor} />
        <Rightbox />
    </div>
  );
}

export default App;
