import React, {useEffect} from "react";
import "./WebSecurityContent.css"
import useFetch from "../../Hooks/useFetch";

const WebSecurityContent = () => {
  const url = '/articles'
  const [{isLoading, response, error}, doFetch] = useFetch(url);
  useEffect(() => {
    doFetch()
  }, [doFetch])

  const spinnerJSX = isLoading ? <div>Идёт загрузка</div> : null;
  const articleJSX = (articles) => {
    return articles.map((article, index) => {
      return (
          <div key={index}>
            <div>
              {article.value}
            </div>
          </div>
      )
    })
  }
  const contentJSX = response ? response.map(function (item, index) {
    return (<div key={index}>
      <div>
        {item.header}
      </div>
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
        <div>
          <p>First card </p>
        </div>
        <div>
          <p>Second card</p>
        </div>
      </div>
  )
}
export default WebSecurityContent;

