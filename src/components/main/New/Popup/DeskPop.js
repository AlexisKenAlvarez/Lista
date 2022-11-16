import React from 'react'
import { motion } from 'framer-motion'


export const DeskPop = () => {
    const deskvar = {
        hide: {
            x: "100%"
        },
        show: {
            x: 0,
            transition: {
                type: "linear",
                duration: 0.5
            }
        }
    }
    return (
        <>
            <motion.div variants={deskvar} initial="hide" animate="show" exit="hide" className='bg-blackBg border-l-8 border-popgreen w-52 h-16 absolute right-0 top-36 flex justify-center items-center'>
                <h2 className='font-space text-popgreen font-bold tracking-wider text-xl'>SUCCESS</h2>
            </motion.div>
        </>
    )
}

export default DeskPop