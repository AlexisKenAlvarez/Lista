import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// FEATURES
import { setTaskName, setTaskSubject, setNameValid, setSubjectValid } from '../../../features/newTaskSlice'

const NewTaskInput = (props) => {
  const inputref = useRef(null)
  const dispatch = useDispatch()
  const [focus, setFocus] = useState(false)
  const [border, setBorder] = useState(null)

  const task = useSelector((state) => state.NewTask)

  useEffect(() => {
    if (props.text === "NEW TASK") {
      inputref.current.focus()
    }

    setBorder(props.border)
  }, [])

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === "NEW TASK") {
      dispatch(setTaskName({ value: value }))

      if (e.target.value.length > 0) {
        dispatch(setNameValid({ value: true }))
      }
    } else if (name === "SUBJECT") {
      dispatch(setTaskSubject({ value: value }))

      if (e.target.value.length > 0) {
        dispatch(setSubjectValid({ value: true }))
      }
    }
  }
  
  return (
    <div className='relative mx-auto w-full flex justify-center mb-5 max-w-[400px]'>
        <input type="text" className="peer mt-6 w-[90%] h-14 p-3 bg-transparent outline-0 text-grey-text font-space text-sm md:text-md md:w-[100%] transition-all ease-in-out" name={props.text} autoComplete='off' ref={inputref} onChange={handleInput} value={props.value} style={focus ? {border: "1px solid white"} : {border: `1px solid ${props.border}`}} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}></input> 

        <p className=" pointer-events-none transition-all ease-in-out text-sm text-center font-space text-stone-100/60 px-3 p-1 w-[8.5rem] mb-[-1.5rem] bg-herobg absolute top-2 left-0 right-0 mx-auto peer-focus:text-white">{props.text}</p>
    </div>
  )
}

export default NewTaskInput