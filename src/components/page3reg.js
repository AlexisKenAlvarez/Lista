import React from 'react'

import Pending from '../images/pending.gif'

const Page3reg = () => {

    return (
        <>
            <div className='relative'>
                <img className="absolute top-[-13rem]" src={Pending} alt="Pending"></img>
                <p className='mt-40 text-white font-space text-center'>We've sent an account activation link to your email. Please click the link to activate your account.</p>
            </div>
        </>
    )
}

export default Page3reg
