import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import { setSuccess } from '../../features/forgot';


// COMPONENTS
import ValidContent from './validContent'
import Axios from 'axios';
import Redirect from './redirect';
import TypeVerify from '../typeverify';


const ForgotLink = () => {

    Axios.defaults.withCredentials = true
    const animation = useAnimation()
    const [validUrl, setValid] = useState("none")
    const dispatch = useDispatch()
    const param = useParams()

    const forgot = useSelector((state) => state.Forgot.success)


    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/", {replace: true})
    }

    useEffect(() => {

        const verifyToken = () => {
            Axios.get(`${process.env.REACT_APP_BASEURL}/${param.id}/checkValid/${param.token}`).then((response) => {
                try {
                    console.log(response)
                    setValid(true)
                } catch (error) {
                    console.log(error)
                    setValid(false)
                }
            })
        }
        verifyToken()
        setTimeout(() => {
            sequence()
            
        }, 500);

        return () => {
            dispatch(setSuccess({value: false}))

        }
    }, [])

    async function sequence() {
        await animation.start({ opacity: 1, y: 20, transition: {duration: 1} })
        animation.start({ y: [20, -20], 
            transition: {
                repeat: Infinity, 
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            } })

    }
    
    const invalidContent = (
        <>
            <div className='flex flex-col mx-auto w-full justify-center items-center'>
                <AnimatePresence>
                    <motion.img initial={{opacity: 0}} animate={animation} src="https://unix-shop.s3.ap-southeast-1.amazonaws.com/ghost.webp" alt="GHOST" className='w-40'></motion.img>
                </AnimatePresence>
                <p className='text-white font-space text-md w-[80%] block text-center mt-6'>404 Not found. Link expired</p>
                <div className='px-20 py-4 border border-fake mt-7 text-white font-space cursor-pointer select-none hover:bg-fake hover:text-blackBg hover:font-bold transition-all ease-in-out' onClick={handleLogin}>
                    GO BACK
                </div>
            </div>

        </>

    )


    return (
        <>
            <div className='bg-blackBg w-full h-screen flex justify-center items-center'>
                {validUrl === "none" ? <TypeVerify/> : 
                validUrl === "true" ? forgot.value ? <Redirect/> : <ValidContent/> : 
                validUrl === "false" ? invalidContent : null}
            </div>  
        </>
        
    )
}

export default ForgotLink