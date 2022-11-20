import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

// COMPONENTS
import Loader from './loader/Loader'
import Hero from './main/hero'

export const PrivateHome = () => {
    Axios.defaults.withCredentials = true
    const navigate = useNavigate()
    const [loggedIn, setLog] = useState(false)

    Axios.get(`${process.env.REACT_APP_BASEURL}/login`).then((response) => {
        console.log("TEST LOGIN")
        console.log(response)
        if (response.data?.loggedIn) {
            setLog(true)
            console.log("TRUE")
        } else {
            setLog(false)
            console.log("FALSE")
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
        <Hero/>
    )
}
