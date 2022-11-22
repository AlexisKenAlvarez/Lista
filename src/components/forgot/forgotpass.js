import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { motion } from 'framer-motion'

// COMPONENTS
import Nav from './forgotnav'
import ForgotSent from './forgotsent'

// IMAGES
import Error from '../../images/error.svg'


const Forgot = () => {
  Axios.defaults.withCredentials = true

  const [email, setEmail] = useState()
  const [error, setErr] = useState('')
  const [success, setSuccess] = useState(false)
  const [debounce, setDebounce] = useState(false)
  const [pop, setPop] = useState(false)

  useEffect(() => {

    return () => {
      setErr('')
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setPop(false)
    }, 1000);

  }, [pop])


  const handleEmail = (e) => {
    setEmail(e.target.value)

  }

  const handleForgot = () => {
    if (!debounce) {
      setDebounce(true)
      Axios.post(`${process.env.REACT_APP_BASEURL}/forgot`, { email: email }).then((response) => {
        if (response.data.valid === false) {
          setErr(response.data.message)
          setPop(true)
          setDebounce(false)
        } else {
          setErr('')
          setSuccess(true)

        }
      })
    }

  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
        handleForgot()
    }
}

  const errPopup = (
    <motion.div animate={pop ? { x: [5, -5, 5, -5, 0] } : { x: 0 }} transition={{ ease: "easeInOut", duration: 0.5 }} className='mt-7 flex bg-barney px-4 py-3 rounded items-center'>
      <img src={Error} alt="Error"></img>
      <p className='text-slate-50 text-xs ml-4 md:text-sm'>{error}</p>

    </motion.div>
  )

  const forgotContent = (

    <div className='relative mt-10'>

      <input type="text" className="peer mt-6 w-full h-14 p-3 bg-transparent outline-0 text-grey-text border border-stone-100/40 font-space text-sm md:text-md" name="email" autoComplete='off' onChange={handleEmail} autoFocus></input>

      <p className=" pointer-events-none transition-all ease-in-out text-sm text-center font-space text-fake2 px-3 p-1 w-[8rem] mb-[-1.5rem] bg-fake absolute top-2 right-5 peer-focus:bg-white">EMAIL ADDRESS</p>

      <input type="button" name="button" value="Confirm" className="font-space cursor-pointer mt-6 w-full h-11 bg-gray-50/50 text-purple uppercase font-bold hover:bg-gray-100 transition-all ease-in-out md:text-md" onClick={handleForgot} onKeyDown={handleKeyDown}></input>

    </div>
  )

  return (
    <>
      <section className='w-100 h-screen bg-gradient bg-cover'>
        <Nav />
        <div className='h-[60%] w-100 flex justify-center items-center'>
          <div className='h-auto w-100'>
            <img src="https://ik.imagekit.io/efpqj5mis/listalogo_2_YE6STLkFc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665117620011" alt="Logo" className="w-70 mx-auto mt-6 md:w-56"></img>

            <h1 className='text-center mt-5 font-space text-grey-text uppercase font-semibold'>Forgot password</h1>
            {success ? <ForgotSent /> : forgotContent}
            {error === '' ? null : errPopup}
          </div>
        </div>
      </section>
    </>
  )
}

export default Forgot
