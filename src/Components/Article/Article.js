import React, {useEffect} from 'react'
import {NavLink, useHistory, useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import ReactMarkdown from "react-markdown";
import {Header} from "../Header/Header"
import {Helmet} from "react-helmet";

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

  const TITLE = "Статьи | StaySecured"

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }


  const contentJSX = response ?
      <div className="article-container">
        <Helmet>
          <title>
            {TITLE}
          </title>
        </Helmet>

        <div className="article-container__content">
          <div className="author">
            <div className="author-avatar">
              <img className="author-avatar-image"
                   src={response.authorId.avatar ? 'https://static.staysecured.online/' + response.authorId.avatar + '.webp' : 'https://static.staysecured.online/61bcc20fae78196359bc3d38.webp'}
                   alt=""/>
            </div>
            <p className="author-name">
              {response.authorId.firstName} {response.authorId.lastName}
            </p>
            <p className="articleDate">
              {new Date(`${response.createTime}`).toLocaleString("ru", options)}
            </p>
          </div>
          <h1 className="article-header">
            {response.header}
          </h1>
          <hr/>
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