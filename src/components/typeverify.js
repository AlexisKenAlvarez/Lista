import React from 'react'
import Typewriter from 'typewriter-effect';


const TypeVerify = () => {
  return (
    <div style={{color: "white"}}>
        <Typewriter
        options={{
            strings: ['Fetching data...'],
            autoStart: true,
            loop: true,
        }}
        />
    </div>
  )
}

export default TypeVerify

