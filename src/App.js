import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import Basket from './Basket';
import Navigation from './Navigation';
import "./reset.css"
import { Context } from './Context';
import { useState } from 'react';
import Detail from './Detail';
let data = require("./data.json")




function App() {


  const [food, setFood] = useState(data)
  const [basketNumber, setBasketNumber] = useState(0)

  function changeStatus(id) {
    food.map((item) => {
      if (item.id == id) {
        item.status = "Added"
      }
    })
  }

  function removeProduct(id) {
    food.map((item) => {
      if (item.id == id) {
        item.status = "Add to cart"
      }
    })
  }

  function increase() {
    setBasketNumber(basketNumber + 1)
  }

  function decrease() {
    setBasketNumber(basketNumber - 1)
  }


  return (
    <Context.Provider value={{ data: food, change: changeStatus, remove: removeProduct, basketNumber: basketNumber, decrease: decrease, increase: increase }}>
      <div className='container'>

        <Routes>
          <Route path='/react-project/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='/react-project/menu/:detail' element={<Detail />} />
            <Route path='contact' element={<Contact />} />
            <Route path='basket' element={<Basket />} />
          </Route>
        </Routes>

      </div>
    </Context.Provider>
  )

}

export default App;
