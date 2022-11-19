import React from 'react'

import dashCircle from '../../../images/recent-circle.svg'

export const RecentOld = (props) => {
  return (
    <div className='h-auto w-11/12 dash-grid text-white font-space mt-16 md:max-w-[700px] xl:max-w-[900px] mx-auto md:mx-0'>

        <h2 className='recent-title lg:text-2xl'>{props.title}</h2>
        <div className='date-added text-xs text-center bg-blackBg py-2 flex items center h-full justify-center items-center'>
            <p>{props.date}</p>
        </div>
        <img src={dashCircle} alt="Dot" className='dash-circ'></img>
        <div className='recent-task bg-blackBg py-2 pl-3 text-sm h-full flex items-center'>
            <p>{props.task}</p>
        </div>
    </div>
  )
}

export default RecentOld