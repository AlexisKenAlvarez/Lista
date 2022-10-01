import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorComp from './error'

import { useDispatch } from 'react-redux'

// SLICES
import { setSuccess } from '../../features/forgot';

//IMAGES
import Arrow from '../../images/right-arrow-svgrepo-com.svg'


const ValidContent = () => {

    const navigate = useNavigate()
    Axios.defaults.withCredentials = true

    const dispatch = useDispatch()


    const [newPass, setNewPass] = useState('')
    const [confirm, setConfirm] = useState('')


    const [error, setErr] = useState('')
    const param = useParams()

    const [debounce, setDebounce] = useState(false)

    const handleChangeInput = (e) => {
        setNewPass(e.target.value)
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value)
    }

    const handleChangePass = () => {
        if (newPass === '') {
            setErr("Password cannot be empty!")
        } else if (newPass.length <= 4) {
            setErr("Your password is too weak!")
        } else if (newPass !== confirm) {
            setErr("Password does not match!")
        } else {
            if (!debounce) {
                setDebounce(true)
                setErr("")
                Axios.post(`${process.env.REACT_APP_BASEURL}/${param.id}/forgot/${param.token}`, {newPassword: newPass}).then((response) => {
                    if (response.data.valid === false) {
                        setErr(response.data.message)
                        setDebounce(false)
                    } else {
                        console.log(response)
                        console.log("PASSWORD RESET SUCCESS")
                        setErr("")
                        dispatch(setSuccess({value: true}))
                    }
                })
            }


        }

    }

    return (
        <> 
            <div className='w-72 h-auto'>
                <p className='text-white font-space text-center text-3xl font-bold tracking-wider'>ENTER NEW PASSWORD</p>
                <p className='text-white font-space text-center mt-8'>Make sure your password is strong enough and never share it to anyone except you.</p>

                <div className='relative mt-10 flex justify-center items-center'>

                    <input type="password" className="peer mt-6 w-[95%] h-14 p-3 bg-transparent outline-0 text-grey-text border border-stone-100/40 font-space text-sm md:text-md md:w-[100%] focus:border-white transition-all ease-in-out" name="password" autoComplete='off' onChange={handleChangeInput} autoFocus></input> 

                    <p className=" pointer-events-none transition-all ease-in-out text-sm text-center font-space text-stone-100/60 px-3 p-1 w-[8.5rem] mb-[-1.5rem] bg-blackBg absolute top-2 left-0 right-0 mx-auto peer-focus:text-white">NEW PASSWORD</p>

                </div>

                <div className='relative mt-2 flex justify-center items-center'>

                    <input type="password" className="peer mt-6 w-[95%] h-14 p-3 bg-transparent outline-0 text-grey-text border border-stone-100/40 font-space text-sm md:text-md md:w-[100%] focus:border-white transition-all ease-in-out" name="password" autoComplete='off' onChange={handleConfirm}></input> 

                    <p className=" pointer-events-none transition-all ease-in-out text-sm text-center font-space text-stone-100/60 px-3 p-1 w-[11rem] mb-[-1.5rem] bg-blackBg absolute top-2 left-0 right-0 mx-auto peer-focus:text-white">CONFIRM PASSWORD</p>

                </div>

                <div className='group verify-login flex justify-center items-center text-white font-space w-[95%] h-11 mx-auto mt-6 cursor-pointer select-none md:w-[100%]' onClick={handleChangePass}>

                    <div className='flex w-14 mx-auto justify-between items-center group-hover:w-28 transition-all ease-in-out group-hover:font-bold select-none'>
                        <p>CONFIRM</p>
                        <img src={Arrow} alt="Arrow" className='w-0 group-hover:w-9 transition-all ease-in-out group'></img>
                    </div>
                </div>

                {error === '' ? null : <ErrorComp error={error}/>}
            </div>
        </>
    )
}

export default ValidContent
