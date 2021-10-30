import React, {useEffect} from 'react'
import {NavLink, useHistory, useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ReactMarkdown from "react-markdown";
import NotFound from "../NotFound/NotFound";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';



const Article = () => {



    const articleId = useParams();
  console.log(articleId)

  const url = '/articles'
  const [{isLoading, response, error}, doFetch] = useFetch(url);

  useEffect(() => {
    doFetch()
  }, [doFetch])

  const spinnerJSX = isLoading ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box> : null;

  const articleJSX = (articles) => {
    return (
        <div>
          <ReactMarkdown children={articles}/>

        </div>
    )
  }




  const contentJSX = response ? response.map(function (item, index) {
    console.log('articleId', articleId._id)
    console.log('itemId', item._id)
    if (articleId._id === item._id) {
      return (<div className="article-container" key={index}>
        <h1 className="article-header">
          {item.header}
        </h1>
        <div>
          {articleJSX(item.contents)}
        </div>
      </div>)
    }


  }) : null



  return (
      <div className="container">
        {spinnerJSX}
        <div className="container-content">
          {contentJSX}
        </div>
      </div>
  )
}

export default Article;