
import { Context } from './Context';
import Card2 from './Card2'
import React, { useContext, useState } from 'react';


export default function Basket(props) {
  let context = useContext(Context);
  const[number, setNumber] = useState(0)
  
  return (

    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", gap: "100px", margin: "50px" }}>
      {context.data.map((item) => {
        if(item.status!=="Add to cart")
          return <Card2 name={item.name} link={item.image} price={item.price} id={item.id} key={item.name} status={item.status} number={number} setNumber={setNumber} />
      })}
    </div>
  )
}
