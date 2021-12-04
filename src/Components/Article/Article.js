import React, {useEffect} from 'react'
import {NavLink, useHistory, useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ReactMarkdown from "react-markdown";
import {Header} from "../Header/Header"

const Article = () => {
  const articleId = useParams();
  console.log(articleId)
  const url = `/articles/${articleId._id}`
  const [{isLoading, response, error}, doFetch] = useFetch(url);

  useEffect(() => {
    doFetch()
  }, [doFetch])

  const spinnerJSX = isLoading ?
      <h1>
        Идёт загрузка
      </h1> : null;

  const articleJSX = (articles) => {
    return (
        <div>
          <ReactMarkdown children={articles}/>
        </div>
    )
  }


  const contentJSX = response ?
      <div className="article-container">
        <div className="article-container__content">
          <h1 className="article-header">
            {response.header}
          </h1>
          <div>
            {articleJSX(response.contents)}
          </div>
        </div>
      </div> : null;

  return (
      <div>
        <Header/>
        <div className="container">
          {spinnerJSX}
          <div className="container-content">
            {contentJSX}
          </div>
        </div>
      </div>
  )
}
export default Article;