import React from 'react'
import { useDispatch } from 'react-redux'

import { setPage, setSlide } from '../../features/heroPage'

const SideNavList = (props) => {
  const dispatch = useDispatch()

  const handlePage = (e) => {
    const id = e.currentTarget.id
    dispatch(setSlide({value: false}))

    if(id === "Dashboard") {
      dispatch(setPage({value: "dashboard"}))
    } else if (id === "Tasks") {
      dispatch(setPage({ value: "tasklist"}))
    }
  }

  return (
    <li className="mb-4" id={props.text} onClick={handlePage}>{props.text}</li>
  )
}

export default SideNavList