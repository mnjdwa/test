import axios from "axios"
import { Dispatch } from "redux"
import * as types from "./constants"

export const getposts=(count=10,page=10)=>(dispatch:Dispatch)=>(
  axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`)
  .then(Response=>{
    // console.log(Response)
    dispatch({type:types.SET_POSTS,payload:Response.data})
    
  })
  .catch(error=>{
    console.log(error)
  })
  )













{

}