import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setUserPassword, setConfirmPass } from '../features/registerSlice'

const Page2reg = () => {

    const dispatch = useDispatch()

    const [pValid, setPValid] = useState(false)
    const [ConfirmPassValid, setConfirmPassValid] = useState(false)

    const userPass = useSelector((state) => state.Register.password)
    const confirmPass = useSelector((state) => state.Register.confirmPass)


    const handlePass = (e) => {
        dispatch(setUserPassword({value: e.target.value}))

        if (userPass.value === '') {
            setPValid(false)
        }
    }

    const handleConfirmPass = (e) => {
        dispatch(setConfirmPass({value: e.target.value}))

        if (confirmPass.value === '') {
            setConfirmPassValid(false)
        }
    }

    const handlePassBlur = () => {
        if (userPass.value !== '') {
            setPValid(true)
        } else {
            setPValid(false)
        }
    }

    const handleConfirmPassBlur = () => {
        if (confirmPass.value !== '') {
            setConfirmPassValid(true)
        } else {
            setConfirmPassValid(false)
        }
    }

    const handlePassFocus = () => {
        setPValid(false)
    }

    const handleConfirmPassFocus = () => {
        setConfirmPassValid(false)
    }

    useEffect(() => {
        if (userPass.value !== '') {
            setPValid(true)
        } else {
            setPValid(false)
        }

        if (confirmPass.value !== '') {
            setConfirmPassValid(true)
        } else {
            setConfirmPassValid(false)
        }
    }, [])


    return (
        <>
            <div>
                <input type="password" className="peer mt-14 w-full h-11 p-3 bg-transparent outline-0 text-grey-text border-b border-b-stone-100/40 font-space text-sm md:text-md" name="pass" autoComplete='off' onBlur={handlePassBlur} onChange={handlePass} onFocus={handlePassFocus} value={userPass.value} autoFocus></input>

                <p className="pointer-events-none transition-all ease-in-out absolute top-[4.5rem] text-sm text-left text-input font-space left-3 peer-focus:translate-x-[10.5rem] md:peer-focus:translate-x-[12.5rem]  peer-focus:left-0 peer-focus:top-[2rem] peer-focus:bg-fake peer-focus:text-fake2 peer-focus:px-2 peer-focus:p-1" style={pValid ? {opacity: 0} : {opacity: 1}}>PASSWORD</p>
            </div>
  

            <input type="password" className="peer mt-4 w-full h-11 p-3 bg-transparent outline-0 text-grey-text border-b border-b-stone-100/40 font-space text-sm md:text-md pr-14 focus:mt-9 transition-all ease-in-out" name="confirmpass" autoComplete='off' onBlur={handleConfirmPassBlur} onFocus={handleConfirmPassFocus} onChange={handleConfirmPass} value={confirmPass.value}></input>

            <p className="pointer-events-none transition-all ease-in-out absolute top-[8.3rem] text-sm text-left text-input font-space left-3 peer-focus:translate-x-[6.5rem] md:peer-focus:translate-x-[8.5rem]  peer-focus:left-0 peer-focus:top-[7rem] peer-focus:bg-fake peer-focus:text-fake2 peer-focus:px-2 peer-focus:p-1"  style={ConfirmPassValid ? {opacity: 0} : {opacity: 1}}>CONFIRM PASSWORD</p>
        </>
    )
}

export default Page2reg
