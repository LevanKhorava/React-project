import React, { useState } from 'react'
import { Context } from './Context'
import { useContext } from 'react'
import minus from "./Images/minus.png"
import plus from "./Images/plus.png"


export default function Card2(props) {
    let context = useContext(Context)
    const [n, setN] = useState(false)
    // const[z, setZ] = useState(props.price)
    const [price, setPrice]= useState(props.price)
    const[quantity,setQuantity] = useState(1)

    function sum(){
      setPrice(price+props.price)
      setQuantity(quantity+1)
    }

    function sumMinus(){
        if(price>props.price){
            setPrice(price-props.price)
            setQuantity(quantity-1)
        }
    }



    return (
        <div onMouseEnter={() => { setN(true) }} onMouseLeave={() => { setN(false) }} className="card" style={{ border: '1px solid yellowgreen', width: "260px", borderRadius: "20px", }}>

            {n == true && <button onClick={() => { context.remove(props.id); props.setNumber(props.number + 1); context.decrease() }} className="button">delete</button>}
            <img style={{ width: '100%', height: "200px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} src={props.link}></img>
            <h1 style={{ padding: "15px", marginLeft: "15px", height: "70px" }}> <span style={{ fontWeight: "bold" }}>Name:</span> {props.name}</h1>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h2 style={{ padding: "15px" }}><span style={{ fontWeight: "bold" }}> Price:</span> {props.price}$</h2>
                    <h2 style={{ padding: "15px" }}><span style={{ fontWeight: "bold" }}>Total Price:</span> {price}$</h2>
                </div>
                
            </div>
            <div style={{display:"flex", justifyContent: "space-around", paddingBottom: "10px"}}>
                <img onClick={sumMinus} style={{ width: "20px", height: "20px", cursor:"pointer" }} src={minus}></img>
                <p>Quantity:{quantity}</p>
                <img onClick={sum} style={{ width: "20px", height: "20px", cursor:"pointer" }} src={plus}></img>
            </div>
        </div>
    )
}
