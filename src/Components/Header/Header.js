import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


export const Hdr = ({title}) => {
  const history = useHistory()

  const headerHandler = () => {
    history.push(`/${title}`)
  }

  return (
      <div className={"header"} onClick={headerHandler}>
        <p className="header__title">
          {title}
        </p>
      </div>
  )
}

