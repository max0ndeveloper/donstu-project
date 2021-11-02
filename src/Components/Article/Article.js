import React, {useEffect} from 'react'
import {NavLink, useHistory, useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ReactMarkdown from "react-markdown";
import NotFound from "../NotFound/NotFound";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ReactPlayer from "react-player";
import {Header} from "../Header/Header"

const Article = () => {
  let history = useHistory();
  const articleId = useParams();
  console.log(articleId)
  const url = '/articles'
  const [{isLoading, response, error}, doFetch] = useFetch(url);
  useEffect(() => {
    doFetch()
  }, [doFetch])
  const spinnerJSX = isLoading ?
      <Box sx={{display: 'flex'}}>
        <CircularProgress/>
      </Box> : null;
  const articleJSX = (articles) => {
    return (
        <div>
          <ReactMarkdown children={articles}/>

        </div>
    )
  }
  const notFoundHandler = () => {
    history.push("/404")
  }
  const contentJSX = response ? response.map(function (item, index) {
    console.log('articleId', articleId._id)
    console.log('itemId', item._id)
    if (articleId._id === item._id) {
      return (<div className="article-container" key={index}>
        <div className="article-container__content">
          <h1 className="article-header">
            {item.header}
          </h1>
          <div>
            {articleJSX(item.contents)}
          </div>
        </div>
      </div>)
    }
  }) : null
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