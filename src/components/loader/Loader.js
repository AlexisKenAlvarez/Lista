import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'

const Loader = () => {
  const animation = useAnimation()

  async function sequence() {
    await animation.start({ opacity: 1, scale: 1 })
    animation.start({
      rotate: [0, 360, 750, 1080, 1420, 1800],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }
    })
  }

  useEffect(() => {
    sequence()
  
  }, [])
  

  const variantLoad = {
    hide: {
      opacity: 0,
      scale: 0,
      transition: {
        ease: "linear",
      }
    },

    exit: {
      opacity: 0,
      transition: {
        ease: "linear",
        duration: 1,
      }
    },

    exitbg: {
      opacity: 0,
      transition: {
        ease: "linear",
        duration: 1,
      }
    },

    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
      }
    },

    rotate: {
      scale: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }
    }
  }

  return (
    <>

      <motion.div className='w-full h-screen absolute top-0 bg-herobg z-[999999]' variants={variantLoad} initial="hidden" animate="show" exit="exitbg" key="div"></motion.div>
      <div className='w-full h-screen flex justify-center items-center absolute top-0 z-[9999999]' key="main">
        <motion.img variants={variantLoad} initial="hide" animate="show" exit="exit" src="https://ik.imagekit.io/efpqj5mis/listalogo-2_PN1de18jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664767117196" alt="Logo" className="absolute w-24"></motion.img>

        <motion.img variants={variantLoad} initial="hide" animate={animation} exit="exit" src="https://ik.imagekit.io/efpqj5mis/LISTA/loading_TFgEypLsJ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666421626568"></motion.img>
      </div>

    </>
  )
}

export default Loader
