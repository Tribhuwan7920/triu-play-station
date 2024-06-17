import React from 'react';
import "./cargame.css";
import cardata from "./cargame.json"

const Cargame = () => {
  return (
    <div className='cg_sec'>

        <div className="cg_heading">
            <h1>car game </h1>
        </div>
      
        <div className="cg_mcart">

            {
                cardata.map((element)=>{
                    return(
                        <div className="cg_indcard">
                            <img src={element.images} alt="no images" />
                            <h1>{element.name}</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto quis temporibus omnis, dolorem tenetur consequuntur maiores eligendi ducimus neque dignissimos commodi nesciunt. Unde a facere recusandae necessitatibus vero beatae.
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

export default Cargame
