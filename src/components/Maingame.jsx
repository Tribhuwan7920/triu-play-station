import React from 'react';
import "./maingame.css"

const Maingame = (props) => {
  return (
    <div className='mgsect'>

      <div className="mgimg">
        <img src={props.img} alt="no images" />
      </div>

      <div className="mgdesc">
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla, ratione molestias recusandae dignissimos provident, magni molestiae ea quaerat eligendi aliquid. Magnam ipsa voluptates perspiciatis expedita quos quas incidunt perferendis.</p>
        <strong>{props.cost}</strong>
        <button className='fsmgbtn'>buy now</button>
        <button className='secmgbtn'>free trial</button>
      </div>

    </div>
  )
}

export default Maingame
