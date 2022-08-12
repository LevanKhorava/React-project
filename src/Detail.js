
import { useParams } from 'react-router-dom'
import { Context } from './Context'
import React, {useContext} from 'react'

export default function Detail() {
let context=useContext(Context)
let {detail}=useParams()
let info=context.data.find((item)=>{
    if(item.name===detail){
        return item
    }
})


    
  return (
    <div style={{width:"60vw", margin:" 30px auto"}}>
        <h1 style={{fontWeight:"bold", fontSize:'50px'}}>{info.name}</h1>
        <img style={{borderRadius:"30px", width:"100%" }}src={info.image}></img>
          <p style={{ fontSize: "35px" , marginTop:"30px"}}><span style={{ fontWeight: "bold" }}>PRICE:</span>   {info.price}$</p>
          <p style={{ fontSize: "35px", marginTop: "30px" }}><span style={{ fontWeight: "bold" }}>DESCRIPTION:</span>{info.description}</p>
    </div>
        

  )
}


