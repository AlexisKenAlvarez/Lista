import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import { setView, setDrop } from '../../../features/taskList'

export const DropDownContent = () => {
    const dispatch = useDispatch()
    const taskList = useSelector((state) => state.TaskList)
    const ref = useRef(null)

    const handleView = (e) => {
        const id = e.currentTarget.id

        if (id === 'simple') {
            dispatch(setView({ value: id}))
        } else {
            dispatch(setView({ value: id}))
        }
    }

    const dropVariant = {
        hidden: {
            opacity: 0,
            y: "-100%",
            pointerEvents: "none"
        },
        shown: {
            opacity: 1,
            y: 0,
            pointerEvents: "auto"

        },
        out: {
            x: "100%",
            opacity: 0
        }
    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            dispatch(setDrop({ value: false}))
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <>
            <motion.div variants={dropVariant} initial="hidden" animate="shown" exit="out" className='w-56 h-24 absolute bg-[#252531] right-0 z-9 bottom-[-5.9rem] rounded-lg flex justify-center items-center' ref={ref}>
                <div className='w-[80%] h-[90%] flex flex-col justify-center'>
                    <div className='flex justify-between cursor-pointer' id="simple" onClick={handleView}>
                        <h3 style={taskList.view.value === 'simple' ? { color: "#C344D7" } : { color: "white" }}>Simplified</h3>
                        <div className='w-11 h-[0.4rem] my-auto' style={taskList.view.value === 'simple' ? { backgroundColor: "#C344D7" } : { backgroundColor: "white" }}></div>
                    </div>

                    <div className='w-[110%] h-[1px] bg-[#4A4A60] my-2 self-center'></div>

                    <div className='flex justify-between cursor-pointer' id="detailed" onClick={handleView}>
                        <h3 style={taskList.view.value === 'detailed' ? { color: "#C344D7" } : { color: "white" }}>Detailed</h3>
                        <div className='flex flex-col'>
                            <div className='w-11 h-[0.4rem] bg-white my-auto' style={taskList.view.value === 'detailed' ? { backgroundColor: "#C344D7" } : { backgroundColor: "white" }}></div>
                            <div className='w-11 h-[0.4rem] bg-white my-auto' style={taskList.view.value === 'detailed' ? { backgroundColor: "#C344D7" } : { backgroundColor: "white" }}></div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default DropDownContent