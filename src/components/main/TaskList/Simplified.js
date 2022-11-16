import React from 'react'
import { useDispatch } from 'react-redux'

import { setDeleteId, setDeleteAction } from '../../../features/taskList'

const Simplified = (props) => {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    const id = e.currentTarget.id
    const action = "remove"

    dispatch(setDeleteId({value: id}))
    dispatch(setDeleteAction({value: action}))

  }

  const handleDone = (e) => {
    const id = e.currentTarget.id
    const action = "finish"

    dispatch(setDeleteId({value: id}))
    dispatch(setDeleteAction({value: action}))

  }

  return (
    <div className='bg-side w-full h-auto mt-7 border-l-4 border-barney rounded text-white font-poppins task-list py-4'>
      <div className='flex task-name ml-5'>
        <img src="https://ik.imagekit.io/efpqj5mis/LISTA/info_8OmYAMuxb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667631138012" alt="Info" className='w-4 cursor-pointer'></img>
        <h2 className='ml-3'>Task: <span className='opacity-50'>{props.task}</span></h2>
      </div>
      <h2 className='task-deadline ml-5'>Deadline: <span className='p-2 bg-[#22222E]'>{props.deadline}</span></h2>
      <img src="https://ik.imagekit.io/efpqj5mis/LISTA/trash_Yc0oPhy55.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667631138211" alt="Trash" className='w-5 task-delete mr-8 cursor-pointer' id={props.id} onClick={handleDelete}></img>

      <div className='w-fit h-auto flex justify-center items-center border-2 border-bOutline p-3 px-3 task-done mr-5 cursor-pointer hover:bg-green-700 hover:border-green-700 transition-all ease-in-out' onClick={handleDone} id={props.id}>
        <img src="https://ik.imagekit.io/efpqj5mis/LISTA/check_ZCpf8fgSb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667631138069" alt="Check" className='w-4'></img>
      </div>
    </div>
  )
}

export default Simplified
