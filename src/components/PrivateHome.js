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
                const data = response.data.userData
                const active = response.data.userData.activeTask
                const finished = response.data.userData.finishedTask
                setActive(data.activeTask.length)
                setFinished(data.finishedTask.length)

                // PUT LIST OF DATA INTO REDUX STATE
                if (finished.length > 0) {
                    dispatch(setFinished({ value: response.data.userData.finishedTask }))
                }

                if (active.length > 0) {
                    dispatch(setList({ value: response.data.userData.activeTask }))
                }
          
                


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
