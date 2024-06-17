import React from 'react';
import Header from "./components/Header";
import Abouthome from './components/Abouthome';
import Aboutcom from './components/Aboutcom';
import Partners from './components/Partners';
import Footer from "./components/Footer"

const About = () => {
  return (
    <div>
      <Header/>
      <Abouthome/>
      <Aboutcom/>
      <Partners image="person.jpg" name="abhishek gupta" role="frontend engineers" />
      <Partners image="person_2.jpg" name="sahil aggarwal" role="backend engineers"/>
      <Partners image="person_3.jpg" name="ankit pandey" role="database engineers"/>
      <Partners image="person_4.jpg" name="harsh kumar" role="deep learning engineers"/>
      <Partners image="person_5.jpg" name="kishan sharma" role="full stack engineers"/>
      <Footer/>

    </div>
  )
}

export default About
