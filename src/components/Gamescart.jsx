import React from 'react';
import "./gamescart.css";
import gamesdata from "./games.json"

const Gamescart = () => {
    return (
        <div className='gc_section'>

            <div className="imp_ct">


                <div className="imp_heading">
                    <h2> populars games </h2>
                </div>

                <div className="cardwrap">


                    {/* <div className="indgcarts">
                        <img src="game_1.jpg" alt="no images" />
                        <h1>free fire</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis delectus magni obcaecati autem maxime! Sint pariatur repellat aut natus alias dolore ab, veritatis nostrum rerum iste corrupti maiores magni!
                        </p>
                        <button className='cfbtn'>buy now </button>
                        <button className='csbtn'>free trial</button>
                    </div> */}

                    {
                        gamesdata.map((element) => {
                            console.log(element)
                            return(
                                <div className="indgcarts">
                                <img src={element.images} alt="no images" />
                                <h1>{element.name}</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis delectus magni obcaecati autem maxime! Sint pariatur repellat aut natus alias dolore ab, veritatis nostrum rerum iste corrupti maiores magni!
                                </p>
                                <button className='cfbtn'>buy now </button>
                                <button className='csbtn'>free trial</button>
                            </div>
                            )
                        })
                    }
                    
                    
                </div>

            </div>

        </div>
    )
}

export default Gamescart
