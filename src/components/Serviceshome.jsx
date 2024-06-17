import React from 'react';
import "./serviceshome.css"

const Serviceshome = () => {
  return (
    <>

    {/* this is the home section of the services page  */}
    <div className='ser_section'>
      <div className="ser_content">
        <h1>triu play station</h1>
        <button className="ser_fbtn">
            <span> play store</span>
           </button>
        <button className="ser_sbtn">
            <span>google play</span></button>
      </div>
    </div>


    {/* this the card section for the services page */}
    <div className="ser_cards">

        <div className="ser_indcards one_cd">
            <h3>fast experience</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facere, voluptatibus corrupti cumque excepturi nobis expedita aliquam ducimus rerum non.
            </p>
        </div>

        

        <div className="ser_indcards two_cd">
          <h3>play with friends</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facere, voluptatibus corrupti cumque excepturi nobis expedita aliquam ducimus rerum non.
          </p>
        </div>


        <div className="ser_indcards three_cd">
          <h3>amazing enviroment</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facere, voluptatibus corrupti cumque excepturi nobis expedita aliquam ducimus rerum non.
          </p>
        </div>


    </div>




      {/* this is the form inside the services section  */}
      
      <div className="ser_form">
        <div className="ser_form_heading">
          <h1>get contant with us</h1>
        </div>
        <div className="ser_item">
            <div className="main_form">
              <form action="#">
                <label htmlFor="name">
                  <input type="text" id='name' value='enter your name'/>
                </label>
                <label htmlFor="email">
                  <input type="text" id='email' value='enter your email' />
                </label>
                <label htmlFor="number">
                  <input type="text" id='number' value='enter your number'/>
                </label>

                <button>submit now</button>
              </form>
            </div>
        </div>
      </div>
      

    </>
  )
}

export default Serviceshome
