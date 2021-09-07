import React from 'react'
import {Hdr} from '../Header/Header'
import {useHistory} from "react-router-dom"

export const Navigation = () => {
  let history = useHistory();
  console.log(history)
  const titles = ['Main', 'News', 'Other', 'Login']

  return (
      <section className="navigation">
        <div className="container-flex">
          { titles.map( (title, i) => {
          return (
              <Hdr key={i} title={title}/>
          )
          })}
        </div>
      </section>
  )
}