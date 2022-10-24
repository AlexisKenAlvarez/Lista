import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { motion } from 'framer-motion'

import '../scss/register.scss'

// Components
import FirstPage from './page1reg'
import SecondPage from './page2reg'
import ThirdPage from './page3reg'

// Images
import Error from '../images/error.svg'
import Background from '../images/background3.png'

// SLICES
import { setPage, setValidEmail, setValidUser, setUserPassword, setConfirmPass, setUsername, setUserEmail } from '../features/registerSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    Axios.defaults.withCredentials = true
    const regPage = useSelector((state) => state.Register.page)

    const userName = useSelector((state) => state.Register.username)
    const userEmail = useSelector((state) => state.Register.email)

    const userPass = useSelector((state) => state.Register.password)
    const confirmPass = useSelector((state) => state.Register.confirmPass)

    const dispatch = useDispatch()

    const [error, setError] = useState('')
    const [buttonShown, setButtonShown] = useState(true)

    const navigate = useNavigate()

    const [debounce, setDebounce] = useState(false)
    
    const [pop, setPop] = useState(false)

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BASEURL}/login`).then((response) => {
            if (response.data.loggedIn) {
              navigate("/home", {replace: true})
            }
        })

        return () => {
            dispatch(setPage({value: 1}))
            setError('')
            dispatch(setValidUser({value: true}))
            dispatch(setValidEmail({value: true}))
            dispatch(setUsername({value: ''}))
            dispatch(setUserEmail({value: ''}))
            dispatch(setUserPassword({value: ''}))
            dispatch(setConfirmPass({value: ''}))
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", getKey, true)
        setTimeout(() => {
          setPop(false)
        }, 1000);
      
      }, [pop])
    

    // REGEX FOR EMAIL VALIDATION
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    // REGEX FOR USERNAME VALIDATION
    const validateUsername = (username) => {
    return /^(?=[a-zA-Z0-9]{3,20}$)/.test(username)
    };

    const handleNext = () => {

        if (regPage.value === 1) {
            
            if (userName.value === '') {
                setError('Username cannot be empty.')
                dispatch(setValidUser({value: false}))
                setPop(true)

            } else if (userName.value.length < 3) {
                setError('Username must be atleast 3-20 characters.')
                setPop(true)

            } else if (!(validateUsername(userName.value))) {
                setError('Username cannot contain whitespace or special characters')
                setPop(true)
                dispatch(setValidUser({value: false}))

            } else if (validateEmail(userEmail.value) == null) {
                setError("Invalid email format.")
                setPop(true)
                dispatch(setValidUser({value: true}))
                dispatch(setValidEmail({value: false}))
                

            }  else {
                setError('')
                dispatch(setValidEmail({value: true}))
                dispatch(setPage({value: regPage.value + 1}))
            }
            
        } else if (regPage.value === 2) {
            if (userPass.value === '') {
                setError('Password cannot be empty!')
                setPop(true)
            } else if (userPass.value.length <= 4) {
                setError("Password is too weak.")
                setPop(true)
            } else if (userPass.value !== confirmPass.value) {
                setError("Password does not match.")
                setPop(true)
            } else {
                setError("")

                if (!debounce) {
                    setDebounce(true)
                    Axios.post(`${process.env.REACT_APP_BASEURL}/register`, {username: userName.value, email: userEmail.value, password: userPass.value}).then((response) => {
                        if(response.data?.existing) {
                            dispatch(setPage({value: 1}))
                            setError("This email address is already registered!")
                            setPop(true)
                            setDebounce(false)

                        } else {
                            dispatch(setPage({value: regPage.value + 1}))
                            setButtonShown(false)
                            setDebounce(false)
                        }
                    })
                }

    

            }
        }
    }

    const handleBack = () => {
        if (regPage.value !== 1) {
            dispatch(setPage({value: regPage.value - 1}))
        }
    }

    const errPopup = (
        <motion.div animate={pop ? { x: [5, -5, 5, -5, 0]} : {x: 0}} transition={{ease: "easeInOut", duration: 0.5}} className='mt-7 flex bg-barney px-4 py-3 rounded items-center'>
            <img src={Error} alt="Error"></img>
            <p className='text-slate-50 text-xs ml-4 md:text-sm'>{error}</p>
                              
        </motion.div>
    )

    const handleLogin = () => {
        navigate("/", {replace: true})
    }

    const getKey = (e) => {
        if (e.key === "Enter") {
            handleNext()
        }
    }


    return (
        <>
            <section className="bg-cover mx-auto h-screen" style={{backgroundImage: `url(${Background})`}}>
                <nav className="w-full h-20 flex justify-end items-center">
                    <div className='h-full w-72 flex items-center text-grey-text font-space mr-10 justify-around uppercase'>
                        <p className="text-sm">Existing user?</p>
                        <div className="border border-slate-100/40 px-9 py-3 cursor-pointer font-semibold hover:bg-grey-text hover:text-gray-500 transition-all ease-in-out select-none text-sm" onClick={handleLogin}>Login</div>
                    </div>
                </nav>

                <div className='h-[60%] mx-auto w-100 flex justify-center items-center mt-9'>
                    <div className="w-min h-auto">
                        <img src="https://ik.imagekit.io/efpqj5mis/listalogo-2_PN1de18jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664767117196" alt="Logo" className="w-48 mx-auto mt-6 font-space md:w-56"></img>

                        <div className='mx-auto w-64 h-auto flex items-center justify-between mt-4'>
                            <div className='w-10 h-10 bg-white flex justify-center items-center rounded-full font-space font-bold text-purple text-lg'>1</div>
                            <div className='h-1 w-11 rounded' style={regPage.value >= 2 ? {backgroundColor: "white"} : {backgroundColor: "#B5B4D5"}}></div>
                            <div className='w-10 h-10  flex justify-center items-center rounded-full font-space font-bold text-purple text-lg'  style={regPage.value >= 2 ? {backgroundColor: "white"} : {backgroundColor: "#B5B4D5"}}>2</div>
                            <div className='h-1 w-11 rounded bg-fake' style={regPage.value >= 3 ? {backgroundColor: "white"} : {backgroundColor: "#B5B4D5"}}></div>
                            <div className='w-10 h-10 bg-fake flex justify-center items-center rounded-full font-space font-bold text-purple text-lg' style={regPage.value >= 3 ? {backgroundColor: "white"} : {backgroundColor: "#B5B4D5"}}>3</div>
                        </div>
                        <h1 className='text-center mt-5 font-space text-grey-text uppercase font-semibold'>Register</h1>

                        <div className='mx-auto h-auto w-64 md:w-72 relative'>

                            {regPage.value === 1 ? <FirstPage/> :
                            regPage.value === 2 ? <SecondPage/>: 
                            regPage.value === 3 ? <ThirdPage/> : null }

                            <div className='w-full h-auto justify-between grid-cols-2 gap-x-3' style={buttonShown ? {display: "grid"} : {display: "none"}}>
                                <input type="button" name="button" value="BACK" className="font-space cursor-pointer mt-6 h-11 bg-gray-50/50 text-purple uppercase font-bold hover:bg-gray-100 transition-all ease-in-out text-sm md:text-md" onClick={handleBack}></input>

                                <input type="button" name="button" value="NEXT" className="font-space cursor-pointer mt-6 h-11 bg-gray-50/50 text-purple uppercase font-bold hover:bg-gray-100 transition-all ease-in-out text-sm md:text-md" onClick={handleNext}></input>
                            </div>

                            {error === '' ? null : errPopup}
                    
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Register;