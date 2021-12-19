import React, {useEffect} from 'react'
import '../../Assets/fonts/fonts.css'
import Logo from "../../Assets/images/logo.svg"
import {useHistory} from 'react-router-dom';
import useFetch from "../../Hooks/useFetch";

export const Header = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(`/`)
  }

  const url = '/articles'

  const [{isLoading, response, error}, doFetch] = useFetch(url);
  useEffect(() => {
    doFetch()
  }, [doFetch])


  const fuzzysort = require('fuzzysort')


    const onSearch = (event) => {
      const result = fuzzysort.go(event, response, {key: "header"})
      result.map(function(item) {
        console.log(item.score)
        // if(item.score > -50) {
        //   history.push(`/articles/${item.obj._id}/${item.obj.header}`)
        // }
      })
    }



  return (
      <div className="header">
        <div className="header-logo" onClick={goBack}>
          <img className="header-logo__logo" src={Logo} alt="Logo"/>
        </div>
        <div className="header-button">
          <div className="header-button_reg">
            <p className="header-button_reg-text">Регистрация</p>
          </div>
          <div className="header-button_log">
            <p className="header-button_log-text">
              Вход
            </p>
          </div>
        </div>
      </div>
  )
}



