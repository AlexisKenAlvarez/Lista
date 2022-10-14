import React from 'react'
import { useDispatch } from 'react-redux';

import { setPage } from '../../features/heroPage';

const Logo = () => {
    const dispatch = useDispatch()

    const handleDash = () => {
        dispatch(setPage({value: "dashboard"}))
    }

    return (
        <img src="https://ik.imagekit.io/efpqj5mis/listalogo-2_PN1de18jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664767117196" alt="Logo" className="mx-auto mt-10 font-space w-44 select-none cursor-pointer" onClick={handleDash}></img>
    )
}

export default Logo;