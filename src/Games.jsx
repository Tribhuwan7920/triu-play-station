import React from 'react';
import Header from './components/Header';
import Gamescart from './components/Gamescart';
import Cargame from './components/Cargame';
import Opengame from './components/Opengame';
import Footer from "./components/Footer"

const Games = () => {
  return (
    <div>
      <Header/>
      <Gamescart/>
      <Cargame/>
      <Opengame/>
      <Footer/>
    </div>
  )
}

export default Games
