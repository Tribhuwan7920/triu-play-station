import React from 'react';
import "./opengame.css";
import opengamedata from "./opengame.json"

const Opengame = () => {
  return (
    <div className='og_sec'>

        <div className='og_heading'>
            <h1>open world games</h1>
        </div>

        <div className='og_mcarts'>


           

            {
                opengamedata.map((element)=>{
                    return(
                        <div className="og_icarts">
                            <img src={element.images} alt="no images" />
                            <h1>{element.name}</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam nostrum eaque totam vitae minima! Ea velit pariatur dolorum dolores consequatur amet, explicabo fugiat minima ad, commodi at incidunt nemo.
                            </p>
                            <button>play now</button>
                        </div>
                    )
                })
            }

        </div>
      
    </div>
  )
}

export default Opengame
