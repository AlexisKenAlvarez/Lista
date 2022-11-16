import React from 'react'
import { motion } from 'framer-motion'

const PhonePop = () => {
  const popvar = {
    hide: {
      y: '-100%',
      borderRadius: "100%",
      height: 120,
    },

    show: {
      y: -30,
      borderRadius: 0,
      height: 120,
      transition: {
        duration: 0.1,
        type: 'spring', 
        stiffness: 70

      }
    },

    exit: {
      y: '-100%',
    }
  }


  return (
    <> 
        <motion.div variants={popvar} initial="hide" animate="show" exit="exit" className='absolute w-full bg-blackBg border-b-8 border-popgreen'>
          <h2 className='font-space text-popgreen font-bold tracking-wider text-xl absolute bottom-6 text-left-0 text-center w-full'>SUCCESS</h2>
        </motion.div>
    </>
  )
}

export default PhonePop