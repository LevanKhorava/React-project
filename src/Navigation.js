import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import "./Navigation.css"
import home from './Images/home.png'
import burger from './Images/burger.png'
import about from './Images/about.png'
import contact from './Images/contact.png'
import basket from './Images/basket.png'
import { Context } from './Context';


export default function Navigation() {
    let context=useContext(Context)
    return (
        <>
            <header style={{height:"100px"}}>
                <nav className='nav'>
                    <ul>
                        <li><NavLink to='/react-project/'>{<img style={{width:"35px", height:"35px"}}  src={home}  ></img>}HOME</NavLink></li>
                        <li><NavLink to='/react-project/menu'>{<img style={{ width: "35px", height: "35px" }} src={burger}></img>}MENU</NavLink></li>
                        <li><NavLink to='/react-project/contact'>{<img style={{ width: "35px", height: "35px" }} src={about}></img>}CONTACT</NavLink></li>
                       

                    </ul>   
                    
                    <NavLink to="/react-project/basket">{<img style={{ width: "40px", height: "40px" }} src={basket}></img>}<span style={{backgroundColor:"red", borderRadius: "50%", padding: "8px", color:"white"}}>{context.basketNumber}</span> </NavLink>
                    
                </nav>
            </header>
            <Outlet />
        </>     
    )
}
