import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import NewTaskInput from './NewTaskInput'
import DateInput from './DateInput'
import NewTaskButton from './NewTaskButton'


const NewTask = () => {

  const task = useSelector((state) => state.NewTask)
  const [taskNameValid, taskSubjectValid, taskDeadlineValid] = [task.taskNameValid.value, task.taskSubjectValid.value, task.deadlineValid.value]

  return (
    <>


      <div className='w-full h-full overflow-hidden bg-cover bg-no-repeat flex justify-center items-center' style={{backgroundImage: "url('https://ik.imagekit.io/efpqj5mis/LISTA/newtask_bg_SnnlI6l8G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666358587168')"}}>
        <div className="mx-auto w-[90%] h-auto">
          <h1 className='text-center font-space text-white font-bold text-2xl mb-10'>NEW TASK</h1>

          <NewTaskInput text="NEW TASK" value={task.taskName.value} border={taskNameValid ? "#f5f5f466" : "#dc143c"}/>
          <NewTaskInput text="SUBJECT" value={task.taskSubject.value} border={taskSubjectValid ? "#f5f5f466" : "#dc143c"}/>
          <DateInput border={taskDeadlineValid ? "#f5f5f466" : "#dc143c"} />
          <NewTaskButton/>

        </div>
      </div>
      
    </>
  )
}

export default NewTask
