import React, {useEffect} from "react";
import Smile from '../../Assets/images/smile.png'
import QR from "../../Assets/images/QR.png"
import {useHistory} from "react-router-dom"
import useFetch from "../../Hooks/useFetch";



const NotFound = () => {
  let history = useHistory();

  const goBack = () => {
    history.push("/")
  }


  const url = '/articles'

  const [{isLoading, response, error}, doFetch] = useFetch(url);
  useEffect(() => {
    doFetch()
  }, [doFetch])


  return (
      <div className="notFound-page">
          <div className="notFound-container">
            <div className="notFound-top">
              <div className="notFound__smile">
                <img className="notFound__smile-img" src={Smile} alt=""/>
              </div>
              <div className="notFound__title">
                <h1 className="notFound__title-text">
                  Ой! Произошла непредвиденная ошибка.
                </h1>
              </div>
              <div className="notFound-button" onClick={goBack}>
                <div className="notFound-goBack">
                  <p className="notFound-goBack__btn">
                    На главную
                  </p>
                </div>
              </div>
            </div>
            <div className="notFound-bottom">
              <div className="notFound-QR">
                <img className="notFound-QR__img" src={QR} alt=""/>
              </div>
              <div className="notFound-error">
                <p className="notFound-error_text">
                  Для большей информации об этой ошибке и возможностей решения, посетите
                  <a className="notFound-error__link" href="https://staysecured.online">https://staysecured.online</a>
                </p>
                <p className="notFound-support_text">
                  При звонке в поддержку сообщите им этот код:
                </p>
                <p className="notFound-errorCode_text">
                  Код ошибки: СТРАНИЦА_НЕ_НАЙДЕНА
                </p>
              </div>
            </div>

        </div>
      </div>
  )
}

export default NotFound;