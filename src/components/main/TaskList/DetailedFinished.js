import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toDelete, setDeleteId, setDeleteAction } from '../../../features/taskList'

const DetailedFinished = (props) => {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    const id = e.currentTarget.id
    const action = "remove"

    dispatch(setDeleteId({ value: id }))
    dispatch(setDeleteAction({ value: action }))

  }
  return (
    <div className='bg-side w-full h-auto mt-7 border-l-4 border-barney rounded text-white font-poppins task-list-finished-detailed py-4 pl-6'>

      <h2 className='ml-3 task-name-finished-detailed'>Task: <span className='opacity-50'>{props.task}</span></h2>

      <h2 className='ml-3 task-subject-finished-detailed'>Subject: <span className='opacity-50'>{props.subject}</span></h2>

      <h2 className='ml-3 task-created-finished-detailed'>Date Created: <span className='opacity-50'>{props.created}</span></h2>

      <h2 className='task-deadline-finished-detailed ml-5'>Deadline: <span className='p-2 bg-[#22222E]'>{props.deadline}</span></h2>

      <img src="https://ik.imagekit.io/efpqj5mis/LISTA/trash_Yc0oPhy55.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667631138211" alt="Trash" className='w-6 task-delete-finished-detailed ml-3 cursor-pointer' id={props.id} onClick={handleDelete}></img>
    </div>
  )
}

export default DetailedFinished