import { useState } from "react";

const usePost = (endpoint) => {
  
  // Make sure to control this feature as rigidly as possible throughout the request.
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [messageSeverity, setMessageSeverity] = useState(null)
  const tokens = localStorage.getItem("authToken") || "none"

  function postFunc(data, action=null, method="POST", contentType="application/json"){
    setIsLoading(true)
    const headers = {
        "Authorization": "Bearer " + tokens,
    }
    if (contentType === "application/json") {
        headers["Content-Type"] = contentType;
    }
    fetch(endpoint, {
        method: method,
        headers: {...headers},
        body: data
    })
        .then((response) => {
            if (response.ok){
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setMessageSeverity("success")
                        setMessage(resObj);
                        if(action!=null) action()
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setMessageSeverity("error")
                            setMessage({
                                message: "Something went wrong. Don't worry we are on it."
                            })
                        })
            } else {
                let promise = response.json()
                promise
                    .then((resObj) => {
                        setIsLoading(false)
                        setMessageSeverity("error")
                        setMessage(resObj);
                    })
                        .catch(() => {
                            setIsLoading(false)
                            setMessageSeverity("error")
                            setMessage({
                                message: "Something went wrong. Don't worry we are on it."
                            })
                        })
            }
        })
            .catch(() => {
                setIsLoading(false)
                setMessageSeverity("error")
                setMessage({
                    message: "Please check your internet connection"
                })
            })
  }

  return {
    postFunc,
    isLoading, 
    setIsLoading, 
    message, 
    setMessage, 
    messageSeverity, 
    setMessageSeverity
}
}

export default usePost;