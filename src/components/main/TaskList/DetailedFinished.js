import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toDelete, setDeleteId, setDeleteAction } from '../../../features/taskList'

// REACT ICONS
import { MdDelete } from 'react-icons/md'

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

      <MdDelete size="1.7em" id={props.id} onClick={handleDelete} color="#d05261" className="ml-2 cursor-pointer task-delete-finished-detailed"/>
    </div>
  )
}

export default DetailedFinished