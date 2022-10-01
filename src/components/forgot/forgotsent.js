import React from 'react'

import Sent from '../../images/passwordsent.gif'

const ForgotSent = () => {
  return (
    <>
        <div className='w-[80%] mx-auto mt-10 bg-slate-100/40 px-4 py-10 rounded relative'>
            <img src={Sent} alt={Sent} className="absolute top-[-2rem] w-16 left-0 right-0 mx-auto"></img>
            <h2 className='text-center text-black font-medium font-space text-xl'>Check email for reset link.</h2>
            <p className='text-center mt-4 text-blackBg font-space'>An email has been sent. If the email doesn't appear on inbox, check your promotions or spam folder.</p>
        </div>
    </>
  )
}

export default ForgotSent
