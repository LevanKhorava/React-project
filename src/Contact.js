import React from 'react'
import "./Contact.css"
import phone from "./Images/phone.png"
import location from "./Images/location.png"
import massage from "./Images/massage.png"

export default function Contact() {
  return (
    <>
    <div className="contact">

      <iframe style={{ width: "60%", height: "50vh", border:"6px solid yellowgreen" }} id="gmap_canvas" src="https://maps.google.com/maps?q=%E1%83%99%E1%83%90%E1%83%9A%E1%83%98%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%90%E1%83%A2%E1%83%94%20%E1%83%A5%E1%83%A3%E1%83%97%E1%83%90%E1%83%97%E1%83%94%E1%83%9A%E1%83%90%E1%83%AB%E1%83%98%E1%83%A1%20%E1%83%A5&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

      <form style={{ width:"30%", height:"30vh", display:"flex", flexDirection:"column", justifyContent:"space-evenly", marginTop:"50px", }}>
        <input style={{width:"100%", border:"none", padding:"10px"}} type="text" placeholder='name'></input><br />
        <input style={{ width: "100%", border: "none", padding: "10px" }} type="email" placeholder='email adress'></input> <br />
        <input style={{ width: "100%", border: "none", padding: "10px" }} type="text" placeholder='number'></input><br />
        <textarea style={{ width: "100%", border: "none", height:"150px" }} placeholder='your massage to us'></textarea> 
        <div style={{marginTop:"10px"}}>
        <button  style={{width:"100px", padding:"5px", backgroundColor:"aqua", color:"black", }}type="submit">SUBMIT</button>
        </div>

      </form>

      


    </div>
      <div style={{ width: "100%",  marginTop:"60px", display: "flex", justifyContent:"space-around"  }}>

        <img  style={{width:"80px", height:"80px"}}src={phone}></img>
        <img style={{ width: "80px", height: "80px" }} src={location}></img>
        <img style={{ width: "80px", height: "80px" }} src={massage}></img>


      </div>

    </>
  )
}
