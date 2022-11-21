import React, { useState, useEffect } from 'react'
import DashStats from './DashStats'
import { useSelector } from 'react-redux'

// IMAGES
import RecentOld from './RecentOld'

const Dashboard = (props) => {
    const task = useSelector((state) => state.TaskList.list)
    const stats = useSelector((state) => state.TaskList.stats)


    useEffect(()  => {

        console.log(task.value)
        console.log(stats)

    }, [])

    const recent = (
        <div className='h-auto m-10 lg:m-16'>
        <img src="https://ik.imagekit.io/efpqj5mis/LISTA/circle_nuBCc1KxT.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665325432264" alt="Ellipse" className='absolute right-0 top-10 xl:top-28 hidden md:block md:w-24 pointer-events-none'></img>
        
        <h1 className='text-white font-space text-3xl md:text-4xl font-bold'>Welcome User</h1>
        <div className='w-[100%] h-auto grid grid-cols-3 mt-5 min-w-min gap-x-4 max-w-[460px] xl:max-w-[580px] xl:gap-x-6 lg:mb-24'>

            {stats.value.map((items, index) => {
                return <DashStats key={items.text} bg={items.bg} text={items.text} stat={items?.value}/>
            })}

        </div>

        {/* <RecentOld task={task?.value[task?.value?.length - 1]?.taskName} date={task?.value[task?.value?.length - 1]?.deadline} title="Most recent task"/>
        <RecentOld task={task?.value[0]?.taskName} date={task?.value[0]?.deadline} title="Oldest Task"/> */}

    </div>
    )

    return (
        <>
            {props.status ? recent : false}
        </>
    )
}

export default Dashboard
