import React from 'react'

const SideNavList = (props) => {
  return (
    <li className="mb-4" id={props.text}>{props.text}</li>
  )
}

export default SideNavList