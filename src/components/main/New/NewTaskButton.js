import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'

import { setConfirmed, setRequest, setTaskName, setTaskSubject, setTaskDeadline, setNameValid, setDeadlineValid, setSubjectValid } from '../../../features/newTaskSlice'

import Arrow from '../../../images/right-arrow-svgrepo-com.svg'

const NewTaskButton = () => {

  Axios.defaults.withCredentials = true
  const dispatch = useDispatch()
  const confirm = useSelector((state) => state.NewTask.confirmed)
  const request = useSelector((state) => state.NewTask.request)
  
  const task = useSelector((state) => state.NewTask)
  const [taskName, taskSubject, deadline] = [task.taskName.value, task.taskSubject.value, task.deadline.value]

  const [nameValid, setName] = useState(false)
  const [subjectValid, setSubject] = useState(false)
  const [deadlineValid, setDeadline] = useState(false)

  useEffect(() => {
    if (taskName !== '') {
      dispatch(setNameValid({ value: true }))
      setName(true)
    }

    if (taskSubject !== '') {
      dispatch(setSubjectValid({ value: true }))
      setSubject(true)
    }

    if (deadline !== '') {
      dispatch(setDeadlineValid({ value: true }))
      setDeadline(true)
    }
  
  }, [taskName, taskSubject, deadline])
  


  const handleConfirm = () => {
    // VALIDATION
    if (taskName === '') {
      console.log("TASK NAME CANNOT BE EMPTY")
      dispatch(setNameValid({ value: false }))
    } 

    if (taskSubject === '') {
      console.log("TASK SUBJECT CANNOT BE EMPTY")
      dispatch(setSubjectValid({ value: false }))

    } 

    if (deadline === '') {
      console.log("TASK DEADLINE CANNOT BE EMPTY")
      dispatch(setDeadlineValid({ value: false }))
    }

    // IF VALIDATION PASSES
    console.log(nameValid)
    console.log(subjectValid)
    console.log(deadlineValid)

    if (nameValid && subjectValid && deadlineValid) {
      if (!confirm.value && !request.value) { // DEBOUNCE
        dispatch(setTaskName({ value: '' }))
        dispatch(setTaskSubject({ value: '' }))
        dispatch(setTaskDeadline({ value: '' }))

        dispatch(setConfirmed({ value: true }))
        dispatch(setRequest({ value: true }))

        setTimeout(() => {
          dispatch(setConfirmed({ value: false }))

        }, 2000);

        dispatch(setRequest({ value: false }))

        setName(false)
        setSubject(false)
        setDeadline(false)

        // API CALL FOR ADD TASK
        Axios.post(`${process.env.REACT_APP_BASEURL}/addtask`, { taskName: taskName, taskSubject: taskSubject, deadline: deadline }).then((response) => {
          if (response.data.status) {

            dispatch(setRequest({ value: false }))


          }
        })
      }
    }

  }


  return (

    <div className='mx-auto w-full h-auto max-w-[400px] relative flex justify-center'>
      <div className='group verify-login flex justify-center items-center text-white font-space w-[90%] md:w-full transition-all ease-in-out h-14 mx-auto mt-6 cursor-pointer select-none' onClick={handleConfirm}>
        <div className='flex w-18 mx-auto justify-between items-center group-hover:w-28 transition-all ease-in-out group-hover:font-bold'>
          <p>CONFIRM</p>
          <img src={Arrow} alt="Arrow" className='w-0 group-hover:w-9 transition-all ease-in-out group'></img>
        </div>
      </div>
    </div>
  )
}

export default NewTaskButton