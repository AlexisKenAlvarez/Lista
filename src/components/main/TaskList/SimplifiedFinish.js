import React from 'react'
import { useDispatch } from 'react-redux'

import { toDelete, setDeleteId, setDeleteAction } from '../../../features/taskList'

const SimplifiedFinish = (props) => {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    const id = e.currentTarget.id
    const action = "remove"

    dispatch(setDeleteId({value: id}))
    dispatch(setDeleteAction({value: action}))

  }

  return (
    <div className='bg-side w-full h-auto mt-7 border-l-4 border-barney rounded text-white font-poppins task-list-finished py-6'>
      <div className='flex task-name-finished ml-5'>
        <img src="https://ik.imagekit.io/efpqj5mis/LISTA/info_8OmYAMuxb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667631138012" alt="Info" className='w-4 cursor-pointer'></img>
        <h2 className='ml-3'>Task: <span className='opacity-50'>{props.task}</span></h2>
      </div>
      <h2 className='task-deadline-finished ml-5'>Deadline: <span className='p-2 bg-[#22222E]'>{props.deadline}</span></h2>
      <img src="https://ik.imagekit.io/efpqj5mis/LISTA/trash_Yc0oPhy55.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667631138211" alt="Trash" className='w-5 task-delete-finished mr-8 cursor-pointer' id={props.id} onClick={handleDelete}></img>

    </div>
  )
}

export default SimplifiedFinish
