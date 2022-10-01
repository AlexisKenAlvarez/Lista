import React from 'react'
import { useNavigate } from 'react-router-dom'

import Arrow from '../../images/right-arrow-svgrepo-com.svg'



const Redirect = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/", {replace: true})
    }
    return (
        <>
            <div className='w-72 h-auto'>
                <p className='text-white font-space text-center text-3xl font-bold tracking-wider'>PASSWORD CHANGED</p>
                <p className='text-white font-space text-center mt-8'>Congratulations! You've' successfuly changed your password. Press the button below to login.</p>
                <div className='group verify-login flex justify-center items-center text-white font-space w-[95%] h-11 mx-auto mt-6 cursor-pointer select-none' onClick={handleLogin}>
                    <div className='flex w-10 mx-auto justify-between items-center group-hover:w-24 transition-all ease-in-out group-hover:font-bold'>
                        <p>LOGIN</p>
                        <img src={Arrow} alt="Arrow" className='w-0 group-hover:w-9 transition-all ease-in-out group'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Redirect