import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import Axios from 'axios'

import '../scss/login.scss'

// IMAGE
import Eye from '../images/showpass.svg'
import Error from '../images/error.svg'

import { setUserEmail, setUserPassword } from '../features/loginSlice'


const Login = () => {

    const dispatch = useDispatch()
    Axios.defaults.withCredentials = true

    const [eValid, seteValid] = useState(false)
    const [pValid, setpValid] = useState(false)

    const [showPassword, toggleShow] = useState(false)
    const navigate = useNavigate()

    const userEmail = useSelector((state) => state.Login.email)
    const userPass = useSelector((state) => state.Login.password)

    const [debounce, setDebounce] = useState(false)

    const [error, setError] = useState("")
    const [pop, setPop] = useState(true)

    const togglePassword = () => {
        toggleShow(!showPassword)
    }

    const navRegister = () => {
        navigate("/register", {replace: true})
    }

    const handleUserEmailBlur = () => {
        if (userEmail.value !== '') {
            seteValid(true)
        } else {
            seteValid(false)
        }
    }

    const handleUserEmailFocus = () => {
        seteValid(false)
    }

    const handlePasswordBlur = () => {
        if (userPass.value !== '') {
            setpValid(true)
        } else {
            setpValid(false)
        }
    }

    const handlePasswordFocus = () => {
        setpValid(false)
    }

    useEffect(() => {
        if (userEmail.value !== '') {
            seteValid(true)
        } else {
            seteValid(false)
        }

        if (userPass.value !== '') {
            setpValid(true)
        } else {
            setpValid(false)
        }

        Axios.get(`${process.env.REACT_APP_BASEURL}/login`).then((response) => {
            if (response.data.loggedIn) {
              navigate("/home", {replace: true})
            }
        })
    }, [])

    const handleLoginEmail = (e) => {
        dispatch(setUserEmail({value: e.target.value}))

        if (userEmail.value === '') {
            seteValid(false)
        }
    }

    const handleLoginPass = (e) => {
        dispatch(setUserPassword({value: e.target.value}))

        if (userPass.value === '') {
            setpValid(false)
        }
    }

    useEffect(() => {
      setTimeout(() => {
        setPop(false)
      }, 1000);
    
    }, [pop])
    

    const handleLogin = () => {
        if(!debounce) {
            setDebounce(true)
            Axios.post(`${process.env.REACT_APP_BASEURL}/login`, {email: userEmail.value, password: userPass.value}).then((response) => {
                if (response.data.valid === false) {
                    setError(response.data.message)
                    setPop(true)
                    setDebounce(false)

                }
    
                if (response.data.loggedIn === true) {
                    navigate("/home", {replace: true})
                    setPop(true)
                    setError('')
                } else {
                    setError(response.data.message)
                    setDebounce(false)

                }
            })
        }

    }

    const errPopup = (
        <AnimatePresence>
            <motion.div animate={pop ? { x: [5, -5, 5, -5, 0]} : {x: 0}} transition={{ease: "easeInOut", duration: 0.5}} className='mt-7 flex bg-barney px-4 py-3 rounded items-center'>
                <img src={Error} alt="Error"></img>
                <p className='text-slate-50 text-xs ml-4 md:text-sm'>{error}</p>
                                
            </motion.div>
        </AnimatePresence>

    )

    const handleChangePass = () => {
        navigate("/forgotpassword", {replace: true})
    }

    return (
        <>
            <section className="bg-gradient bg-cover mx-auto h-screen">
                <nav className="w-full h-20 flex justify-end items-center">
                    <div className='signup-button h-full w-72 flex items-center text-grey-text font-space mr-10 justify-around uppercase'>
                        <p className="text-sm">Not a member?</p>
                        <div className="border border-slate-100/40 px-9 py-3 cursor-pointer font-semibold hover:bg-grey-text hover:text-gray-500 transition-all ease-in-out select-none text-sm" onClick={navRegister}>Sign up</div>
                    </div>
                </nav>

                <div className='h-3/5 mx-auto w-100 flex justify-center items-center'>
                    <div className="w-min h-auto">
                        <img src="https://unix-shop.s3.ap-southeast-1.amazonaws.com/lista/listalogo-2.webp" alt="Logo" className="w-48 mx-auto mt-10 font-space md:w-56"></img>

                        <div className='mx-auto h-auto w-64 md:w-72 relative'>
                            <div>
                                <input type="text" className="peer mt-20 w-full h-11 p-3 bg-transparent outline-0 text-grey-text border-b border-b-stone-100/40 font-space text-sm md:text-md" name="email" autoComplete='off' onBlur={handleUserEmailBlur} onFocus={handleUserEmailFocus} onChange={handleLoginEmail} value={userEmail.value} autoFocus></input>

                                <p className="pointer-events-none transition-all ease-in-out absolute top-[5.9rem] text-sm text-left text-input font-space left-3 peer-focus:translate-x-[8.5rem] md:peer-focus:translate-x-[10.5rem]  peer-focus:left-0 peer-focus:top-[3.2rem] peer-focus:bg-fake peer-focus:text-fake2 peer-focus:px-2 peer-focus:p-1" style={eValid ? {opacity: 0} : {opacity: 1}}>EMAIL ADDRESS</p>
                            </div>
                            

                            <input type={showPassword ? "text" : "password"} className="peer mt-4 focus:mt-9 transition-all ease-in-out w-full h-11 p-3 bg-transparent outline-0 text-grey-text border-b border-b-stone-100/40 font-space text-sm md:text-md pr-14" name="pasaword" autoComplete='off' onBlur={handlePasswordBlur} onFocus={handlePasswordFocus} onChange={handleLoginPass} value={userPass.value}></input>

                            <p className="pointer-events-none transition-all ease-in-out absolute top-[9.8rem] text-sm text-left text-input font-space left-3 peer-focus:translate-x-[8.5rem] md:peer-focus:translate-x-[12.5rem]  peer-focus:left-0 peer-focus:top-[8.5rem] peer-focus:bg-fake peer-focus:text-fake2 peer-focus:px-2 peer-focus:p-1"  style={pValid ? {opacity: 0} : {opacity: 1}}>PASSWORD</p>

                            <input type="button" name="button" value="Login" className="font-space cursor-pointer mt-6 w-full h-11 bg-gray-50/50 text-purple uppercase font-bold hover:bg-gray-100 transition-all ease-in-out md:text-md" onClick={handleLogin}></input>

                            <p className="text-grey-text font-space text-center mt-4 select-none cursor-pointer transition-all ease-in-out hover:text-white" onClick={handleChangePass}>Forgot password?</p>

                            <img src={Eye} alt="Toggle Password" className="absolute top-40 peer-focus:top-44 right-3 w-6 cursor-pointer transition-all ease-in-out" style={showPassword ? {opacity: '1'} : {opacity: '0.5'}} onClick={togglePassword}></img>
                        </div>
                        {error === '' ? null : errPopup}
                    </div>
                </div>
            </section>
        </>
  )
}

export default Login;