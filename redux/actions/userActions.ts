import http from '../../utils/http'
import { SET_USERS, SET_SINGLE_USER, ADD_USERS } from './types'
import { Dispatch } from 'redux'
import { User } from '../../types/types'

export const getUsers = (page = 0) => (dispatch: Dispatch) => (
  http.get(`/search_by_date?tags=story&page=${page}`)
    .then(res => {
      // alert(JSON.stringify(res.data, null, 4))
      dispatch({ type: ADD_USERS, payload: res.data.hits })
    })
    .catch(err => {
      alert(JSON.stringify(err, null, 4))
    })
)

export const getSingleUser = (user: User) => (dispatch: Dispatch) => (
  dispatch({ type: SET_SINGLE_USER, payload: user })
)