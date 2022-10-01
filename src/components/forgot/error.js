import React from 'react'

import Error from '../../images/error.svg'


const ErrorComp = (props) => {
  return (
    <>
        <div className='mt-7 flex bg-barney px-4 py-3 rounded items-center w-[95%] mx-auto md:w-[100%]'>
            <img src={Error} alt="Error"></img>
            <p className='text-slate-50 text-xs ml-4 md:text-sm'>{props.error}</p>
                              
        </div>
    </>
  )
}

export default ErrorComp