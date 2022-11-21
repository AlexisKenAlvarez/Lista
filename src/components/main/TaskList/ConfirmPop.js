import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'


import Close from  '../../../images/close.svg'

import { toDelete, setDeleteAction, setDeleteId, setToggleUpdate, toDeleteFinish } from '../../../features/taskList'

const ConfirmPop = () => {
    Axios.defaults.withCredentials = true

    const task = useSelector((state) => state.TaskList)
    const dispatch = useDispatch()
    const from = useSelector((state) => state.TaskList.deleteFrom)
    const toggleUpdate = useSelector((state) => state.TaskList.toggleUpdate)



    const handleConfirm = () => {
        console.log(task.deleteId.value)
        dispatch(setDeleteAction({value: ''}))

        if (from.value === "active") {
            dispatch(toDelete({ id: task.deleteId.value }))
        } else {
            dispatch(toDeleteFinish({ id: task.deleteId.value }))
        }


        Axios.post(`${process.env.REACT_APP_BASEURL}/remove`, {id: task.deleteId.value, action: task.action.value, from: from.value}).then((response) => {
          console.log(response)
          dispatch(setToggleUpdate({ value: !toggleUpdate }))

        })
    }
    

    const handleClose = () => {
        dispatch(setDeleteAction({value: ''}))
    }

    useEffect(() => {
    
      return () => {
        dispatch(setDeleteId({value: ''}))
        dispatch(setDeleteAction({value: ''}))
      }
    }, [])
    

    return (
        <div className='w-full h-screen fixed top-0 flex justify-center items-center'>
            <div className='closer absolute bg-white opacity-20 w-full h-screen top-0 cursor-pointer' onClick={handleClose}></div>
            <div className='bg-[#22222E] w-80 h-44 z-10 rounded-xl relative md:w-96'>

                <img src={Close} alt="Close" className='absolute cursor-pointer right-4 top-4' onClick={handleClose}></img>

                <h2 className='text-white font-poppins text-center mx-auto mt-14'>{task.action.value === 'finish' ? "Are you sure, this task is finished?" : "Do you want to remove this task?"}</h2>
                <div className='flex w-[85%] h-auto mx-auto gap-x-5 absolute bottom-5 left-0 right-0'>
                    <div className='w-[90%] h-12 border border-[#D05261] rounded-md flex items-center justify-center text-white font-bold cursor-pointer hover:bg-[#D05261] transition-all ease-in-out' onClick={handleClose}>
                        <p>No</p>
                    </div>
                    <div className='w-[90%] h-12 border border-[#71C06A] rounded-md flex items-center justify-center text-white font-bold cursor-pointer hover:bg-[#71C06A] transition-all ease-in-out' onClick={handleConfirm}>
                        <p>Yes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPop
