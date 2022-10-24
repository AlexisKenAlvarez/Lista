import React, {useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// SLICES
import { setUsername, setUserEmail, setValidUser, setValidEmail } from '../features/registerSlice'

const Page1reg = () => {

    const [uValid, setUValid] = useState(false)
    const [eValid, setEValid] = useState(false)

    const dispatch = useDispatch()
    const userName = useSelector((state) => state.Register.username)
    const userEmail = useSelector((state) => state.Register.email)

    const userValid = useSelector((state) => state.Register.userValid)
    const emailValid = useSelector((state) => state.Register.emailValid)

    const handleUser = (e) => {
        dispatch(setUsername({value: e.target.value}))

        if (userName.value === '') {
            setUValid(false)
        }
    }

    const handleEmail = (e) => {
        dispatch(setUserEmail({value: e.target.value}))

        if (userEmail.value === '') {
            setEValid(false)
        }
    }

    const handleUserBlur = () => {
        if (userName.value !== '') {
            setUValid(true)
        } else {
            setUValid(false)
        }
    }

    const handleUserFocus = () => {
        setUValid(false)
    }

    const handleEmailBlur = () => {
        if (userEmail.value !== '') {
            setEValid(true)
        } else {
            setEValid(false)
        }
    }

    const handleEmailFocus = () => {
        setEValid(false)
    }

    useEffect(() => {
        if (userName.value !== '') {
            setUValid(true)
        } else {
            setUValid(false)
        }

        if (userEmail.value !== '') {
            setEValid(true)
        } else {
            setEValid(false)
        }

        return () => {
            dispatch(setValidUser({value: true}))
            dispatch(setValidEmail({value: true}))


        }
    }, [])



    return (
        <>
            <div>
                <input type="text" className="peer mt-14 w-full h-11 p-3 bg-transparent outline-0 text-grey-text font-space text-sm md:text-md" name="username" autoComplete='off' onChange={handleUser} value={userName.value} onBlur={handleUserBlur} onFocus={handleUserFocus} style={userValid.value ? {borderBottom: "1px solid #bdbbde"} : {borderBottom: "1px solid #8323CF"}} autoFocus></input>

                <p className="pointer-events-none transition-all ease-in-out absolute top-[4.5rem] text-sm text-left text-input font-space left-3 peer-focus:translate-x-[10.5rem] md:peer-focus:translate-x-[12.5rem]  peer-focus:left-0 peer-focus:top-[2rem] peer-focus:bg-fake peer-focus:text-fake2 peer-focus:px-2 peer-focus:p-1" style={uValid ? {opacity: 0} : {opacity: 1}}>USERNAME</p>
            </div>
            


            <input type="text" className="peer mt-4 w-full h-11 p-3 bg-transparent outline-0 text-grey-text font-space text-sm md:text-md pr-14 focus:mt-9 transition-all ease-in-out" name="email"  onBlur={handleEmailBlur} onFocus={handleEmailFocus} autoComplete='off' onChange={handleEmail} value={userEmail.value} style={emailValid.value ? {borderBottom: "1px solid #bdbbde"} : {borderBottom: "1px solid #8323CF"}}>
            </input>
            <p className="pointer-events-none transition-all ease-in-out absolute top-[8.3rem] text-sm text-left text-input font-space left-3 peer-focus:translate-x-[8.5rem] md:peer-focus:translate-x-[10.5rem]  peer-focus:left-0 peer-focus:top-[7rem] peer-focus:bg-fake peer-focus:text-fake2 peer-focus:px-2 peer-focus:p-1"  style={eValid ? {opacity: 0} : {opacity: 1}}>EMAIL ADDRESS</p>
        </>
    )
}

export default Page1reg
