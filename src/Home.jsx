import React from 'react';
import Header from "./components/Header";
import Home_sec from "./components/Home_sec";
import Favgame from "./components/Favgame";
import Maingame from "./components/Maingame";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Home_sec/>
      <Favgame/>
      <Maingame img="game_15.jpg" name="garema free fire" cost="$500"/>
      <Maingame img="game_14.jpg" name="battle ground" cost="$300"/>
      <Maingame img="game_13.jpg" name="fire simulations" cost="$100"/>
      <Maingame img="game_11.jpg" name="millitiary firing" cost="$450"/>
      <Maingame img="game_12.jpg" name="free killing" cost="$459"/>
      <Footer/>
    </div>
  )
}

export default Home
