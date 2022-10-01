import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import '../scss/verified.scss'
import { AnimatePresence, motion, useAnimation } from 'framer-motion';


import Arrow from '../images/right-arrow-svgrepo-com.svg'

const Verified = () => {
    const navigate = useNavigate()
    const [validUrl, setValidUrl] = useState(false)
    const param = useParams()
    const animation = useAnimation()

    Axios.defaults.withCredentials = true
    
    const handleLogin = () => {
        navigate("/", {replace: true})
    }

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const url = `${process.env.REACT_APP_BASEURL}/${param.id}/verify/${param.token}`
                await Axios.get(url).then((response) => {
                    console.log(response)
                    setValidUrl(true)

                })
            } catch (error) {
                console.log(error)
                setValidUrl(false)
            }
        }
        verifyEmail()
        sequence()

    }, [param])

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
    

    const validContent = (
        <div className='w-72 h-auto'>
                <p className='text-white font-space text-center text-3xl font-bold tracking-wider'>EMAIL VERIFIED</p>
                <p className='text-white font-space text-center mt-8'>Your email address was successfuly verified. Your account is now active.</p>
                <div className='group verify-login flex justify-center items-center text-white font-space w-[95%] h-11 mx-auto mt-6 cursor-pointer select-none' onClick={handleLogin}>
                    <div className='flex w-10 mx-auto justify-between items-center group-hover:w-24 transition-all ease-in-out group-hover:font-bold'>
                        <p>LOGIN</p>
                        <img src={Arrow} alt="Arrow" className='w-0 group-hover:w-9 transition-all ease-in-out group'></img>
                    </div>
                </div>
            </div>
    )

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
        <section className='h-screen w-full bg-blackBg flex justify-center items-center'>
            {validUrl ? validContent : invalidContent}

        </section>
    </>
  )
}

export default Verified;
