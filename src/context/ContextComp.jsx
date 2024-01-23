import React,{createContext, useEffect, useState} from 'react'
import AppContext from './ContextApi'
import { getData, postData } from '../callApi/backend_api'
const BASE_URL='http://localhost:4000'
const MainContext = (props) => {

  const [user,setUser]=useState({
    isLoggedIn:false,
    username:''
  })
  useEffect(()=>{
    getData('/auth/isLoggedIn',{status:true}).then(res=>{
   console.log(res.data.loggedIn)
      if(res.data.status==200){
        setUser({
          isLoggedIn:true,
          username:res.data.data.username
        })
      }
      
    })
  
  },[])
  return (
    <AppContext.Provider value={{user,setUser,BASE_URL}}>
      {props.children}
    </AppContext.Provider>
  )
 
}

export default MainContext