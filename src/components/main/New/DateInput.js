import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DateInput = () => {

    const [value, setValue] = useState()
    const [focused, setFocus] = useState()

    const onChange = (data) => {
        setValue(data)
    }

    return (

        <div className='relative mx-auto w-full flex justify-center mb-5 items-center h-auto'>
            <div className='mx-auto max-w-[360px] md:max-w-[400px] w-[90%] md:w-[100%] transition-all ease-in-out'>
                <DatePicker onChange={onChange} selected={value} formatDate="MM/dd/yyyy" minDate={new Date()} className="peer mt-6 w-full h-14 p-3 bg-transparent outline-0 text-grey-text border border-stone-100/40 font-space text-sm md:text-md  focus:border-white transition-all ease-in-out mx-auto text-center" onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}/>
            </div>

            <p className="pointer-events-none transition-all ease-in-out text-sm text-center font-space text-stone-100/60 px-3 p-1 w-[8.5rem] mb-[-1.5rem] bg-herobg absolute top-2 left-0 right-0 mx-auto peer-focus:text-white" 
            style={focused ? {color: "white"} : {color: "rgb(245 245 244 / 0.6)"}}>DEADLINE</p>
        </div>
    )
}

export default DateInput
