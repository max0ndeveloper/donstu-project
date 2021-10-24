import React, {useEffect} from "react";
import useFetch from "../../Hooks/useFetch";
import ReactMarkdown from 'react-markdown'




 const Main = () => {

   const url = '/articles'
   const [{isLoading, response, error}, doFetch] = useFetch(url);

   useEffect(() => {
     doFetch()
   }, [doFetch])

   const spinnerJSX = isLoading ? <div>Идёт загрузка</div> : null;

   const articleJSX = (articles) => {
     return (
         <div>
           <ReactMarkdown children={articles}/>

         </div>
     )
   }

   const contentJSX = response ? response.map(function (item, index) {
     return (<div key={index}>
       <div>
         {item.header}
       </div>
       <hr/>
       <div>
         {
           console.log('item', item)
         }

         {articleJSX(item.contents)}
       </div>
     </div>)
   }) : null

   return (
       <div className="container">
         {spinnerJSX}
         {contentJSX}
       </div>


   )

 }



   export default Main;
