import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const [log, setLog] = useState(false)
  const navigate = useNavigate()
  Axios.defaults.withCredentials = true


  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BASEURL}/login`).then((response) => {
      if (response.data.loggedIn) {
        setLog(true)
      } else {
        setLog(false)
        navigate("/", {replace: true})

      }
    })
  }, [])

  const handleLogout = () => {
    Axios.post(`${process.env.REACT_APP_BASEURL}/logout`).then((response) => {
      console.log(response.data)
      navigate("/", {replace: true})
    })
  }

  if (!log) {
    return <h1>Temporary Loading Screen...</h1>
  }

  return (
    <>
        <h1 className='font-space'>Status: Logged in</h1>
        <p className='font-space'>Website in development</p>

        <p className='mt-10 cursor-pointer font-bold' onClick={handleLogout}>Temporary LOGOUT button</p>
    </>
  )
}

export default Hero
