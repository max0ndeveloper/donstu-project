import React, {useEffect} from "react";
import useFetch from "../../Hooks/useFetch";
import ReactMarkdown from 'react-markdown'
import {NavLink, useHistory, useParams} from "react-router-dom";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Temp from "../../Assets/images/temp.png"
import {Header} from "../Header/Header"


 const Main = () => {

  const history = useHistory();
   console.log(history)

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

     const articleHandler = ()=> {
       history.push(`/articles/${item._id}/${item.header}`)
     };

     return (<div className="main-container" key={index} onClick={articleHandler}>
       <div className="main-container__content">
         <h1 className="main-header">
           {item.header}
         </h1>
         <div className="article-img">
           <img className="article-img__img" src={Temp} alt="temp"/>
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

