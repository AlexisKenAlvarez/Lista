import React, { useRef, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'

import Calendar from '../../../images/calendar.svg'

import { setTaskDeadline, setDeadlineValid } from '../../../features/newTaskSlice'


export const DateInput = (props) => {

    const [focused, setFocus] = useState()
    const [value, setValue] = useState()
    const dispatch = useDispatch()
    const dateValue = useSelector((state) => state.NewTask.deadline)
    const request = useSelector((state) => state.NewTask.request)

    const handleDate = (data) => {
        const dateString = new Date(data).toLocaleDateString()
        dispatch(setTaskDeadline({ value: dateString }))
        setValue(data)
        console.log(data)
        if (data === null) {
            dispatch(setTaskDeadline({ value: '' }))
        } 
    }

    useEffect(() => {
      setValue('')
    

    }, [request])
    

    return (

        <div className='relative mx-auto w-full flex justify-center mb-5 items-center h-auto'>
            <div className='x-auto max-w-[360px] md:max-w-[400px] w-[90%] md:w-[100%] transition-all ease-in-out relative'>
                <div className='mt-6 w-full h-14 transition-all ease-in-out mx-auto relative bg-transparent' style={focused ? {border: "1px solid white"} : {border: `1px solid ${props.border}`}}>
                    <DatePicker onChange={handleDate} selected={value} formatDate="MM/dd/yyyy" minDate={new Date()} className="w-full h-14 p-3 bg-transparent outline-0 text-grey-text font-space text-sm md:text-md transition-all ease-in-out mx-auto text-center absolute top-[-1.1rem]" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onKeyDown={(e) => e.preventDefault()}/>
                </div> 

                <img src={Calendar} alt="Calendar Icon" className='right-4 absolute top-[2.6rem] w-5 transition-all ease-in-out'style={ focused ? {filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(222deg) brightness(104%) contrast(104%)"} : null}></img>
            </div>

            <p className="pointer-events-none transition-all ease-in-out text-sm text-center font-space text-stone-100/60 px-3 p-1 w-[8.5rem] mb-[-1.5rem] bg-herobg absolute top-2 left-0 right-0 mx-auto peer-focus:text-white" 
            style={focused ? {color: "white"} : {color: "rgb(245 245 244 / 0.6)"}}>DEADLINE</p>
        </div>
    )
}

export default DateInput
