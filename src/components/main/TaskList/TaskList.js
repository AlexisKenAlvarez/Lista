import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import "../../../App.scss"
import "../../../scss/taskList.scss"
import "../../../scss/taskListFinished.scss"

// FEATURES
import { setView, setDeleteFrom } from '../../../features/taskList'


// COMPONENTS
import DropDown from './DropDown'
import ScrollToTop from '../../ScrollToTop';
import Active from './Active';
import Finish from './Finish'


const TaskList = () => {
    const [tab, setTab] = useState(0)
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    const dispatch = useDispatch()
    const taskList = useSelector((state) => state.TaskList.view)
    const listData = useSelector((state) => state.TaskList.list)
    const [taskSlice, setTaskSlice] = useState([])
    const topRef = useRef(null)
    
    const [offset, setOffset] = useState(0)
    const [pageCount, setPageCount] = useState()
    const itemsPerPage = 6

    const task = useSelector((state) => state.TaskList.action)

    useEffect(() => {
        const data = window.localStorage.getItem('TASK_VIEW')
        dispatch(setView({ value: data }))

        topRef.current.scrollIntoView();

    }, [listData, offset, listData.value])


    useEffect(() => {
        const resizeW = () => changeDeviceSize(window.innerWidth);

        window.addEventListener("resize", resizeW); // Update the width on resize

        if (deviceSize <= 1023) {
            dispatch(setView({ value:'simple' }))
        }


        return () => window.removeEventListener("resize", resizeW);
    }, [deviceSize]);

    useEffect(() => {
        window.localStorage.setItem('TASK_VIEW', taskList.value)
    }, [taskList.value])


    const handlePage = (e) => {
        const tab = e.target.tabIndex
        if (tab === 0) {
            dispatch(setDeleteFrom({ value: "active"}))
        } else {
            dispatch(setDeleteFrom({ value: "finished"}))
        }
        
        setTab(tab)
    }

    return (
        <>
            <ScrollToTop/>
            <div className='w-[85%] h-auto mx-auto pb-44'>
                <div className='absolute top-[-30%] w-5 h-5 bg-white left-0' ref={topRef}></div>
                <div className='w-full h-auto mt-4 text-white flex relative font-poppins'>
                    <div className='flex relative'>
                        <h2 className='p-4 px-5 opacity-40 cursor-pointer select-none' tabIndex={0} id={0} style={tab === 0 ? { opacity: "100%", borderBottom: "4px solid white" } : { opacity: "40%" }} onClick={handlePage}>Active</h2>
                        <h2 className='p-4 opacity-40 cursor-pointer select-none' tabIndex={1} style={tab === 1 ? { opacity: "100%", borderBottom: "4px solid white" } : { opacity: "40%" }} onClick={handlePage}>Finished</h2>
                    </div>

                    <DropDown/>

                    <div className='w-full h-[1px] bg-[#4A4A60] absolute bottom-0'></div>
                </div>

                {tab === 0 ? <Active/> :
                tab === 1 ? <Finish/> : null}
                

            </div>

        </>
    )
}

export default TaskList