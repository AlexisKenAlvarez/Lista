import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

// COMPONENTS
import Loader from './loader/Loader'
import Hero from './main/hero'
import { useDispatch } from 'react-redux'
import { setList, setFinished } from '../features/taskList'

export const PrivateHome = () => {
    Axios.defaults.withCredentials = true

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loggedIn, setLog] = useState(false)
    const [finished, setFinished] = useState(0)
    const [active, setActive] = useState(0)

    Axios.get(`${process.env.REACT_APP_BASEURL}/login`).then((response) => {
        console.log("TEST LOGIN")
        console.log(response)
        if (response.data?.loggedIn) {

            Axios.get(`${process.env.REACT_APP_BASEURL}/tasks`).then((response) => {
                const data = response.data?.userData
                setActive(data?.activeTask?.length)
                setFinished(data?.finishedTask?.length)

                console.log(response.data.userData.activeTask)
                console.log(data.finishedTask)
                console.log(data)
          
                // PUT LIST OF DATA INTO REDUX STATE
                dispatch(setList({ value: data?.activeTask }))
                dispatch(setFinished({ value: data?.finishedTask }))



                setLog(true)

              })

        } else {
            setLog(false)

            navigate("/", { replace: true })

        }
    })

    if (!loggedIn) {
        return (
            <AnimatePresence>
                <Loader/>
            </AnimatePresence>
        )
    }

    return (
        <Hero finished={finished} active={active}/>
    )
}
