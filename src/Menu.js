
import Card from './Card'
import {Context} from './Context'
import React, {useContext, useState} from 'react';


export default function Menu() {
  const[number, setNumber] =useState(0)
  let context=useContext(Context);
  return (
    <div style={{display:"flex", flexWrap: 'wrap', justifyContent:"center", gap:"100px", margin:"50px"}}>
    {context.data.map((item)=>{
      if(item.status ==="Add to cart")
      return <Card name={item.name} link={item.image} price={item.price} id={item.id} key={item.name} status={item.status} number={number} setNumber={setNumber}/>
    })}
    </div>
  )
 }
