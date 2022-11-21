import React from 'react'

const DashStats = (props) => {
    
    return (
        <div className='h-32 lg:h-36 xl:h-44 rounded-2xl relative' style={{backgroundColor: `${props.bg}`}}>
            <p className='text-sm text-white font-space text-center mt-2 px-2 absolute mx-auto left-0 right-0 md:text-md xl:text-lg'>{props.text}</p>
            <h2 className='text-center text-white font-poppins font-extrabold text-4xl mt-14 md:mt-16 xl:text-5xl'>{props.stat}</h2>
            <div className='absolute w-12 h-12 rounded-full m-auto left-0 right-0 bottom-[-1.3rem]' style={{backgroundColor: `${props.bg}`}}></div>
        </div>
    )
}

export default DashStats;