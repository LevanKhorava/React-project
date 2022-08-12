import React from 'react'
import home from './Images/home.png'
import burger from './Images/burger.png'
import about from './Images/about.png'
import right from './Images/right-arrow.png'
import left from './Images/left-arrow.png'
import { useState } from 'react'


export default function Home() {
    let massive=[home, burger, about]
    const [n, setN] = useState(0)
    let photo=massive[n]

    function changeRight(){
        if(n==2){
            return setN(0)
        }
    }

    function changeLeft(){
        if(n==0){
            return setN(2)
        }
    }

  return (
    <div className='homePage' style={{display: 'flex', alignItems: 'center', justifyContent:"space-around"}}>
    <button onClick={()=>{setN(n-1); changeLeft()}} style={{height:"80px"}} className="left">{<img style={{width:"75px",height:"75px"}} src={left}></img>}</button>
    {<img style={{width:"60vw", height:"90vh"}} src={photo}></img>}
          <button onClick={()=>{setN(n+1); changeRight()}} style={{ height: "80px" }} className="right">{<img style={{ width: "75px", height: "75px" }} src={right}></img>}</button>
      </div>
  )
}
