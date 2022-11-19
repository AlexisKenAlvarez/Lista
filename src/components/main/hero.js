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


const Hero = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const confirm = useSelector((state) => state.NewTask.confirmed)
  const request = useSelector((state) => state.NewTask.request)
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const toggleUpdate = useSelector((state) => state.TaskList.toggleUpdate)


  const [log, setLog] = useState(false)
  const [list, setList] = useState(false)
  const [data, setData] = useState()
  const [device, setDevice] = useState('')
  const [statsLabel, setStatLabel] = useState([])


  Axios.defaults.withCredentials = true

  const page = useSelector((state) => state.handlePage.page)
  const taskAction = useSelector((state) => state.TaskList.action)


  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BASEURL}/login`).then((response) => {
      if (response.data.loggedIn) {
        setLog(true)
      } else {
        setLog(false)
        navigate("/", { replace: true })

      }
    })

    if (deviceWidth <= 1023) {
      setDevice("phone")
    } else {
      setDevice("desktop")
    }

  }, [])


  useEffect(() => {
    const resizeW = () => setDeviceWidth(window.innerWidth)

    window.addEventListener("resize", resizeW)

    if (deviceWidth <= 1023) {
      setDevice("phone")
    } else {
      setDevice("desktop")
    }

    return () => {
      window.removeEventListener("resize", resizeW)
    }
  }, [deviceWidth])

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BASEURL}/tasks`).then((response) => {
      setData(response.data.userData)

      setList(true)

    })

  }, [request, toggleUpdate])

  useEffect(() => {
    if (list) {
      // FOR DASHBOARD
      setStatLabel([
        {
          text: "Active Tasks",
          value: data?.activeTask.length,
          bg: "#FC76A1",
        },
        {
          text: "Finished Tasks",
          value: data?.finishedTask.length,
          bg: "#70C4BF",
        },
        {
          text: "User Level",
          value: Math.floor(data?.finishedTask.length / 5),
          bg: "#AE68E6",
        }]
      )

      dispatch(setList({ value: data.activeTask }))
      dispatch(setFinished({ value: data.finishedTask }))
    }

  }, [data, log, list])



  if (!log && !list) {
    return <h1>Temporary Loading Screen...</h1>
  }

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
