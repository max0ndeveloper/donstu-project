import React, {useEffect} from "react";
import useFetch from "../../Hooks/useFetch";
import ReactMarkdown from 'react-markdown'
import {useHistory} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Header} from "../Header/Header"
import {Helmet} from "react-helmet";
import TagsImg from "../../Assets/images/organize tag.png"

const Main = () => {

  const history = useHistory();

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

  const contentJSX = response ? response.map(function (item, index) {
    const articleHandler = () => {
      history.push(`/articles/${item._id}`)
    };

    const TITLE = "Главная | StaySecured"

    const avatarURL = item.authorId.avatar

    const CreateDate = new Date(`${item.createTime}`)

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }




    return (
        <div className="main-container" key={index} onClick={articleHandler}>
          <Helmet>
            <title>
              {TITLE}
            </title>
          </Helmet>
          <div className="main-container__content">
            <div className="author">
              <div className="author-avatar">
                <img className="author-avatar-image"
                     src={avatarURL ? 'https://static.staysecured.online/' + avatarURL + '.webp' : 'https://static.staysecured.online/61bcc20fae78196359bc3d38.webp'}
                     alt=""/>
              </div>
              <p className="author-name">
                {item.authorId.firstName} {item.authorId.lastName}
              </p>
              <p className="mainDate">
                {CreateDate.toLocaleString("ru", options)}
              </p>
            </div>
            <h1 className="main-header">
              {item.header}
            </h1>
            <div className="article-tags">
              <img className="article-tags__img" src={TagsImg} alt=""/>
              <p className="article-tags__text">
                {item.tags.join(', ')}
              </p>
            </div>
            <div className="article-img">
              {/*<img className="article-img__img" src={Temp} alt="temp"/>*/}
              <img className="article-img__img" src={item.thumbnailURL} alt="articleImg"/>
            </div>
            <div>
              {articleJSX(item.description)}
            </div>
          </div>
        </div>)
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
export default Main;

