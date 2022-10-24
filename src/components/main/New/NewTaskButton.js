import React from 'react'

import Arrow from '../../../images/right-arrow-svgrepo-com.svg'


const NewTaskButton = () => {
  return (
    <div className='mx-auto w-full h-auto max-w-[400px] relative flex justify-center'>
        <div className='group verify-login flex justify-center items-center text-white font-space w-[90%] md:w-full transition-all ease-in-out h-14 mx-auto mt-6 cursor-pointer select-none'>
            <div className='flex w-18 mx-auto justify-between items-center group-hover:w-28 transition-all ease-in-out group-hover:font-bold'>
                <p>CONFIRM</p>
                <img src={Arrow} alt="Arrow" className='w-0 group-hover:w-9 transition-all ease-in-out group'></img>
            </div>
        </div>
    </div>
  )
}

export default NewTaskButton