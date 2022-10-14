import React, { useState } from 'react'

// IMAGES
import BurgerImage from '../../images/burger.svg'
import BackButton from '../../images/back-button.svg'

// COMPONENTS
import SideNavList from './SideNavList'


const Burger = () => {
    const [navList, setList] = useState(["Dashboard", "Tasks", "Finished", "Help"])
    const [navActive, setNav] = useState(false);

    const toggleNav = () => {
        setNav((current) => !current)
    }

    
    return (
        <>
            <img src={BurgerImage} alt="Menu" className='lg:hidden cursor-pointer' onClick={toggleNav}></img>

            <div className='absolute top-0 left-0 h-screen w-full navhalf:w-[14rem] lg:hidden transition-all ease-in-out bg-purpletrans'
            style={navActive ? {transform: "translateX(0%)"} : {transform: "translateX(-100%)", transitionDelay: "500ms"}}></div>

            <nav className='side-menu absolute top-0 left-0 h-screen w-full bg-[#1D1D26] navhalf:w-[14rem] lg:hidden transition-all ease-in-out delay-75 duration-500 z-50'
            style={navActive ? {transform: "translateX(0%)"} : {transform: "translateX(-100%)"}}>
                <div className='sidenav-items ml-10 h-auto mt-10'>
                    <img src={BackButton} alt="BackButton" className='cursor-pointer select-none' onClick={toggleNav}></img>

                    <img src="https://ik.imagekit.io/efpqj5mis/listalogo-2_PN1de18jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664767117196" alt="Logo" className="w-36 mt-10"></img>

                    <ul className='text-white font-space mt-6 ml-3'>
                        {navList.map((text, index) => {
                            return <SideNavList key={index} text={text}/>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Burger