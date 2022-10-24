import React, { useRef, useEffect } from 'react'

const NewTaskInput = (props) => {
  const inputref = useRef(null)

  useEffect(() => {
    if (props.text === "NEW TASK") {
      inputref.current.focus()
    }
  

  }, [])
  
  return (
    <div className='relative mx-auto w-full flex justify-center mb-5 max-w-[400px]'>
        <input type="text" className="peer mt-6 w-[90%] h-14 p-3 bg-transparent outline-0 text-grey-text border border-stone-100/40 font-space text-sm md:text-md md:w-[100%] focus:border-white transition-all ease-in-out" name="password" autoComplete='off' ref={inputref}></input> 

        <p className=" pointer-events-none transition-all ease-in-out text-sm text-center font-space text-stone-100/60 px-3 p-1 w-[8.5rem] mb-[-1.5rem] bg-herobg absolute top-2 left-0 right-0 mx-auto peer-focus:text-white">{props.text}</p>
    </div>
  )
}

export default NewTaskInput