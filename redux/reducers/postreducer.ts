import { ActionSheetIOS } from "react-native"
import * as types from '../action/constants'
const intialState = {
  posts:[


  ],
  post:{
    title:"",
    url:"",
    created_at_i:"",
    author:""
  }
}
export default (state=intialState,action:any) =>{
  switch(action.type){
    case types.SET_POSTS:
      return{
      ...state,posts: action.payload
      }
    default:
      return state
  }
}