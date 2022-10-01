import React from 'react'
import { useNavigate } from 'react-router-dom'



const ForgotNav = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/", {replace: true})
    }

    return (
        <nav className="w-full h-20 flex justify-end items-center">
            <div className='h-full w-64 flex items-center text-grey-text font-space mr-10 justify-around uppercase'>
                <p className="text-sm">Go back?</p>
                <div className="border border-slate-100/40 px-9 py-3 cursor-pointer font-semibold hover:bg-grey-text hover:text-gray-500 transition-all ease-in-out select-none text-sm" onClick={handleLogin}>Login</div>
            </div>
        </nav>
    )
}

export default ForgotNav