import {BASE_URL, Response_Code} from "../constant";
import {useCallback, useEffect, useState} from "react";

const useFetch = (endpoint) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options) => {
    setOptions(options);
    setIsLoading(true);
  }, [])

  useEffect( () => {
    let skipGetResponseAfterDestroy = false;
    if (!isLoading) return;

    const requestOptions = {
      ...options,
      // ...{
      //   headers: {
      //     authorization: ''
      //   }
      // }
    }

    // Fetch
    fetch(`${BASE_URL}${endpoint}`, requestOptions)
        .then((response) => {
          if(!skipGetResponseAfterDestroy) {
            setIsLoading(false)
            if(response.status === Response_Code.success) {
              return response.json()
            } else {
              setError('Something ways wrong')
            }
          }
        } )
        .then((response) => {
          setResponse(response)
        })
        .catch((error) => {
          if(!skipGetResponseAfterDestroy) {
            console.log('error', error)
            setIsLoading(false)
          }
        })

    // let response = await fetch('https://api.wkeep.ru/v1/articles');
    //
    // if(response.ok) {
    //   let data = await response.json();
    //   console.log(data[0]);
    // } else {
    //   console.log(response.status)
    // }

    return () => {
      skipGetResponseAfterDestroy = true;
    }
  } , [isLoading, endpoint, options])
  return [{isLoading, response, error}, doFetch]
}

export default useFetch;
