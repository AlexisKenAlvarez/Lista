import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


// STYLE
import '../../scss/hero.scss'

// COMPONENTS
import NavItems from './NavItems'
import NavbarUp from './NavbarUp'
import Dashboard from './Dashboard/Dashboard'
import NewTask from './New/NewTask'
import Logo from './Logo'


const Hero = () => {
  const [log, setLog] = useState(false)
  const navigate = useNavigate()

  Axios.defaults.withCredentials = true

  const page = useSelector((state) => state.handlePage.page)


  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BASEURL}/login`).then((response) => {
      if (response.data.loggedIn) {
        setLog(true)
      } else {
        setLog(false)
        navigate("/", { replace: true })

      }
    })

  }, [])
  

  if (!log) {
    return <h1>Temporary Loading Screen...</h1>
  }

  return (
    <>
      <section className='hero-wrapper h-screen w-full bg-[#15151C]'>
        <div className='navbar-up bg-side flex items-center justify-center'>
          <NavbarUp/>
        </div>
        <div className='navbar-left bg-side hidden lg:block'>

          <div className='nav-container w-full h-auto mx-auto'>
            <Logo/>
            <div className='w-full h-auto mx-auto mt-10 p-0'>
              <ul className='text-white flex flex-col justify-center w-full p-0'>

                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/dashboard1_ufXkO3rzC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932659" text="Dashboard"/>
                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/activities_CkrcAsu84.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932627" text="Tasks"/>
                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/done_haguUW8l2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932321" text="Finished"/>
                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/help_8iHQFtaTd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932528" text="Help"/>

              </ul>
            </div>
          </div>
        </div>
        <div className='main-section relative'>
          

          {page.value === "dashboard" ? <Dashboard/> : 
          page.value === "newtask" ? <NewTask/> : null}
          

        </div>
      </section>
    </>
  )
}

export default Hero
