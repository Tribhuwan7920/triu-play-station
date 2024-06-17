import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <div className='mn_footer'>


        <div className="fmlinks">
            <p>home</p>
            <p>about</p>
            <p>contact</p>
            <p>documentations</p>
            <p>get premium</p>
            <p>free trial games</p>
            <p>services</p>
        </div>


        <div className="fmcarts">

            <div className="fcad">
                <img src="game_7.jpg" alt="no images" />
                <h3>free fire</h3>
            </div>

            <div className="fcad">
                <img src="game_9.jpg" alt="no images" />
                <h3>call of duty </h3>
            </div>
        </div>

        <div className="fmabout">
            <div>
                <strong>google : </strong>
                <p>http://www.google.com/tiruplaystation</p>
            </div>
            <div>
                <strong>youtube : </strong>
                <p>http://www.youtube.com/tiruplaystation</p>
            </div>
            <div>
                <strong>linkdein : </strong>
                <p>http://www.linkdein.com/tiruplaystation</p>
            </div>
            <div>
                <strong>play store : </strong>
                <p>http://www.playstore.com/tiruplaystation</p>
            </div>
        </div>

        <div className="mfpremium">
            <img src="game_15.jpg" alt="no images" className='fmimg' />
            <img src="game_11.jpg" alt="no images" className='fmimg' />
           

        </div>
    </div>
  )
}

export default Footer
