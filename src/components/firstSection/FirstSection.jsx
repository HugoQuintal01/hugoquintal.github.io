import React from 'react'
import './firstSection.css'

const FirstSection = () => {


    return(

        <div className='main'>
            <h2>Hello,</h2>
            <h2>I am <span className='yellowColor'>Hugo</span></h2>
            <h2>Front End Developer</h2>
            <p>Crafting digital experiences with <span className='yellowColor'>code</span>, <span className='yellowColor'>passion</span>, and <span className='yellowColor'>creativity</span>.</p>
            <button>Let's work</button>
        </div>

    )

}


export default FirstSection;