import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Context } from './Context';
import  { useContext } from 'react';




 

export default function Card(props) {

  let context = useContext(Context);
  let navigate=useNavigate()
  const[n,setN]=useState(false)

  

  return (
    
    <div onMouseEnter={() => { setN(true) }} onMouseLeave={() => { setN(false) }} className="card" style={{border: '1px solid yellowgreen', width:"220px", borderRadius:"20px",   }}>
      
      {n == true && <button onClick={()=>{context.change(props.id);props.setNumber(props.number+1);context.increase()}} className="button">{props.status}</button>}
      <img style={{ width: '217px', height: "200px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} src={props.link}></img>
      <h1 style={{ padding: "15px", marginLeft: "15px", height: "70px" }}> <span style={{fontWeight: "bold"}}>Name:</span> {props.name}</h1>
      <div style={{display:"flex", justifyContent:"space-around", alignItems: "center"}}>
        <h2 style={{ padding: "15px" }}><span style={{ fontWeight: "bold" }}>Price:</span> {props.price}$</h2>
        <button onClick={() => { navigate(`/react-project/menu/${props.name}`)}} style={{borderRadius:"15px", backgroundColor: "blue", color: "white", padding:"5px"}}>Details</button>
      </div>
    </div>
    
  )
} 
