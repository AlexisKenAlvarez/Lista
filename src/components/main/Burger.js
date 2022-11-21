import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { setSlide } from '../../features/heroPage'

// IMAGES
import BackButton from '../../images/back-button.svg'

// React Icons
import { BiMenu } from "react-icons/bi";

// COMPONENTS
import SideNavList from './SideNavList'


const Burger = () => {
    const [navList, setList] = useState(["Dashboard", "Tasks", "Finished", "Help"])
    const dispatch = useDispatch()
    const slide = useSelector((state) => state.handlePage.slide)
    const navigate = useNavigate()
    Axios.defaults.withCredentials = true

    const toggleNav = () => {
        dispatch(setSlide({ value: !slide.value }))
    }

    const handleLogout = () => {
        dispatch(setSlide({ value: !slide.value }))
        Axios.post(`${process.env.REACT_APP_BASEURL}/logout`).then((response) => {
          navigate("/", { replace: true })
        })
      }

    
    return (
        <>
            <BiMenu color="white" fontSize="3rem" style={{cursor: "pointer"}} className="lg:hidden" onClick={toggleNav} />

            <div className='absolute top-0 left-0 h-screen w-full navhalf:w-[14rem] lg:hidden transition-all ease-in-out bg-purpletrans z-50'
            style={slide.value ? {transform: "translateX(0%)"} : {transform: "translateX(-100%)", transitionDelay: "500ms"}}></div>

            <nav className='side-menu absolute top-0 left-0 h-screen w-full bg-[#1D1D26] navhalf:w-[14rem] lg:hidden transition-all ease-in-out delay-75 duration-500 z-50'
            style={slide.value ? {transform: "translateX(0%)"} : {transform: "translateX(-100%)"}}>
                <div className='sidenav-items ml-10 h-auto mt-10'>
                    <img src={BackButton} alt="BackButton" className='cursor-pointer select-none' onClick={toggleNav}></img>

                    <img src="https://ik.imagekit.io/efpqj5mis/listalogo-2_PN1de18jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664767117196" alt="Logo" className="w-36 mt-10"></img>

                    <ul className='text-white font-space mt-6 ml-3'>
                        {navList.map((text, index) => {
                            return <SideNavList key={index} text={text}/>
                        })}
                    </ul>

                    <p className='ml-3 font-space text-[#D05261] font-bold select-none' onClick={handleLogout}>LOG OUT</p>
                </div>
            </nav>
        </>
    )
}

export default Burger