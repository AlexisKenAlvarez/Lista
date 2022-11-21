import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'


// STYLE
import '../../scss/hero.scss'

// SLICES
import { setList, setFinished } from '../../features/taskList'

// COMPONENTS
import NavItems from './NavItems'
import NavbarUp from './NavbarUp'
import Dashboard from './Dashboard/Dashboard'
import NewTask from './New/NewTask'
import Logo from './Logo'
import TaskList from './TaskList/TaskList'
import PhonePop from './New/Popup/PhonePop'
import DeskPop from './New/Popup/DeskPop'
import ConfirmPop from './TaskList/ConfirmPop'


const Hero = (props) => {
  const [done, setDone] = useState(false)
  const [statsLabel, setStatLabel] = useState([])
  const confirm = useSelector((state) => state.NewTask.confirmed)
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const [device, setDevice] = useState('')
  const dispatch = useDispatch()

  const request = useSelector((state) => state.NewTask.request)
  const toggleUpdate = useSelector((state) => state.TaskList.toggleUpdate)
  const task = useSelector((state) => state.TaskList.list)

  Axios.defaults.withCredentials = true

  const page = useSelector((state) => state.handlePage.page)
  const taskAction = useSelector((state) => state.TaskList.action)

  useEffect(() => {
    console.log(props.active)
    console.log(props.finished)
    console.log(page.value)

  }, [request, toggleUpdate])

  return (
    <>
      <section className='hero-wrapper h-screen w-full bg-[#15151C]'>
        <div className='navbar-up bg-side flex items-center justify-center'>
          <NavbarUp />
        </div>
        <div className='navbar-left bg-side hidden lg:block'>

          <div className='nav-container w-full h-auto mx-auto'>
            <Logo />
            <div className='w-full h-auto mx-auto mt-10 p-0'>
              <ul className='text-white flex flex-col justify-center w-full p-0'>

                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/dashboard1_ufXkO3rzC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932659" text="Dashboard" />
                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/activities_CkrcAsu84.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932627" text="Tasks" />
                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/done_haguUW8l2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932321" text="Finished" />
                <NavItems src="https://ik.imagekit.io/efpqj5mis/LISTA/Nav/help_8iHQFtaTd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665153932528" text="Help" />

              </ul>
            </div>
          </div>
        </div>
        <div className='main-section relative'>

          {page.value === "dashboard" ? <Dashboard stats={statsLabel} /> :
            page.value === "newtask" ? <NewTask /> :
              page.value === "tasklist" ? <TaskList /> : null}

        </div>
        <AnimatePresence>
          {request.value ? confirm.value ? device === "phone" ? <PhonePop key="phonePop" /> : <DeskPop key="deskPop" /> : null : confirm.value ? device === "phone" ? <PhonePop key="phonePop" /> : <DeskPop key="deskPop" /> : null}
          {taskAction.value !== '' ? <ConfirmPop /> : null}

        </AnimatePresence>

      </section>

    </>
  )
}

export default Hero