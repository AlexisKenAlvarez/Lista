import React, { useState } from 'react'
import NewTaskInput from './NewTaskInput'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const NewTask = () => {
  const [value, setValue] = useState()
  const onChange = (data) => {
    setValue(data)
  }
  return (
    <>
      <div className="mx-auto w-[90%] h-auto mt-10">
        <h1 className='text-center font-space text-white font-bold text-2xl mb-10'>NEW TASK</h1>

        <NewTaskInput text="NEW TASK" />
        <NewTaskInput text="SUBJECT" />

        <div className='relative mx-auto w-full flex justify-center mb-5 items-center'>
          <DatePicker selected={value} onChange={onChange} dateFormat="MM/dd/yyyy" minDate={new Date()} className="peer mt-6 w-[90%] h-14 p-3 bg-transparent outline-0 text-grey-text border border-stone-100/40 font-space text-sm md:text-md md:w-[100%] focus:border-white transition-all ease-in-out mx-auto block text-center"/>
        </div>


      </div>
    </>
  )
}

export default NewTask
