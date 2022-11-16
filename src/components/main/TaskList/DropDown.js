import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DropArrow from '../../../images/dropArrow.svg'
import { motion, AnimatePresence } from 'framer-motion'

import { setDrop } from '../../../features/taskList'
import DropDownContent from './DropDownContent'

const DropDown = () => {
    const dispatch = useDispatch()
    const taskList = useSelector((state) => state.TaskList)
    const [active, setActive] = useState(false)

    const handleDrop = () => {
        dispatch(setDrop({ value: !active}))
        setActive(!active)
    }

    return (
        <>
            <div className='w-fit h-auto text-white task-dropdown ml-auto mr-4 select-none cursor-pointer hidden lg:flex z-10 relative' onClick={handleDrop}>
                <h2 className='py-4 px-3'>{taskList.view.value === "simple" ? "Simplified" : "Detailed"}</h2>
                <motion.img initial={{rotate: 0}} animate={taskList.dropActive.value ? {rotate: 180} : {rotate: 0}} src={DropArrow} alt="Arrow" className='w-3 self-center justify-self-center mt-[-7px]'></motion.img>
            </div>

            <AnimatePresence>
                {taskList.dropActive.value ? <DropDownContent key="DropDown"/> : null}
            </AnimatePresence>
            
        </>
    )
}

export default DropDown