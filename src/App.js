import { useState } from 'react';
import './App.css';
import CComponents from './CComponents';
// import React,{useState} from "react";
// import FunctionalComp from './Components/FunctionalComp';
// import ClassComp from './Components/ClassComp';
// import Click from './Components/Click';
// import Counter from './Components/Counter';

function App() {
  // let user ={first_name: "Rajeev",last_name:"Kumar"}
  // function formatuser(user)
  // {
  //   if(user)
  //   {
  //    return (user.first_name+" "+user.last_name);
  //   }
  //   else
  //   {
  //     return "stranger";
  //   }
  // }

  const[flag,setflag]=useState(false);
  // const[name,setname]=useState("Rajeev");
  // const[flag,setflag]=useState(false);
  // const[steps,setsteps]=useState(0);
  // const[names,setnames]=useState([]);
  
  // function changeName()
  // {
  //  return setflag(!flag);
  
  // }
  // function increment()
  // {
  //   setsteps((prevstate)=>prevstate+2);
  // }
  // function decrement()
  // {
  //   setsteps((prevstate)=>prevstate-2);
  // }
  // function addnames(e)
  // {
  //   e.preventDefault();
  //   setnames([...names,{id:names.length,name:name}]);
  //   setname("");
  // }
  return (
    <>
    {/* Hello,
    {formatuser(user)} */}
    {/* <FunctionalComp/>
    <div>My react app:{flag ? name : "Rashmi" }</div>
    <button onClick={changeName}>click me</button>
    <hr></hr>
    <button onClick={decrement}>-</button>
    <div>{steps}</div>
    <button onClick={increment}>+</button>
    <hr></hr>
    <form onSubmit={addnames}>
      <input type="text" value={name} placeholder="add names" onChange={(e)=>setname(e.target.value)}
      />
      <button>submit</button>
    </form>
    <hr></hr>
    <ul>
    {names.map((item)=>(
   <li key={item.id}>{item.name}</li>
    ))}
    </ul>
    <ClassComp/>
    {/* <ClassComp1/> */}
    {/* <Click/>
    <Counter/> */}
    {/* <div>{time}</div>
    <div>{message}</div> */}
    {flag ?<CComponents/>:""}
    <button onClick={()=>setflag(!flag)}>Click me to toggle components</button> 
    </>
  );
}

export default App;
