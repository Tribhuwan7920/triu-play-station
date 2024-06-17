import React from 'react';
import "./partners.css"

const Partners = (props) => {
  return (
    <div className='partners_sec'>
      <div className="par_sec">
        <div className="par_img">
            <img src={props.image} alt="no images" />
        </div>
        <div className="par_content">
            <h1>{props.name}</h1>
            <h3>{props.role} </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum debitis repellat similique error odit atque in impedit neque nam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio maxime minima voluptate corporis tempora nostrum?
            </p>
        </div>
      </div>
    </div>
  )
}

export default Partners
