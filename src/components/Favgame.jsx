import React from 'react';
import "./favgame.css";
import data from "./favgame.json"

const Favgame = () => {
  console.log(data)
  return (
    <div className='fav_sec'>

      <div className="mhd">
        <h1>popular games</h1>
      </div>

      <div className="mhd_cards">

        {
          data.map((element)=>{
            return (
              <div className="mhd_icards">
                  <img src={element.images}alt="no images" />
                  <h2> {element.heading}</h2>
                  <p>{element.description}</p>
                  <button>buy now</button>
              </div>
            )
          })
        }

      </div>


    </div>
  )
}

export default Favgame
