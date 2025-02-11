import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Home/Cart/Cart'
import PlaceOrder from './pages/Home/Cart/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus);
    setShowLogin(false);
  };

  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    <div className='app'>
      <Navbar 
        setShowLogin={setShowLogin} 
        isLoggedIn={isLoggedIn} 
        onLogout={() => setIsLoggedIn(false)}
      />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/order' element={isLoggedIn ? <PlaceOrder/> : <Home/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App