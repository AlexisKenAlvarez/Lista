import React, { useEffect, useState } from 'react'
import DashStats from './DashStats'
import Axios from 'axios'

// IMAGES
import RecentOld from './RecentOld'

const Dashboard = () => {
    Axios.defaults.withCredentials = true

    const [userData, setUserData] = useState({})

    const [statsLabel, setStatLabel] = useState([])

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BASEURL}/tasks`).then((response) => {
            const data = response.data.userData
            const tasks = data.activeTask.length
            setStatLabel([
                {
                    text: "Active Tasks",
                    value: tasks,
                    bg: "#FC76A1",
                },
                {
                    text: "Finished Tasks",
                    value: 0,
                    bg: "#70C4BF",
                },
                {
                    text: "User Level",
                    value: data.level,
                    bg: "#AE68E6",
                }]
                )

        })

    }, [])


    return (
        <div className='h-auto m-10 lg:m-16'>
            <h1 className='text-white font-space text-3xl md:text-4xl font-bold'>Welcome User</h1>
            <div className='w-[100%] h-auto grid grid-cols-3 mt-5 min-w-min gap-x-4 max-w-[460px] xl:max-w-[580px] xl:gap-x-6 lg:mb-24'>

                {statsLabel.map((items, index) => {
                    return <DashStats key={items.text} bg={items.bg} text={items.text} stat={items.value}/>
                })}

            </div>

            <RecentOld task="Maglaro mamayang 8:00 pm" date="10/05/2022" title="Most recent task"/>
            <RecentOld task="Magdota bukas magdamag" date="10/11/2022" title="Oldest Task"/>

        </div>
    )
}

export default Dashboard
