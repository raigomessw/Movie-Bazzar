
import { createAction, createReducer } from "@reduxjs/toolkit"

//Actions

const isFetching = createAction('is fetching')
const success = createAction('success')
const failure = createAction('failure')

const actions = {isFetching, success, failure};

const STATUS = {
  NORMAL: 'normal',
  FETCHING: 'is fetching',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

const initialState = {
  status: STATUS.NORMAL,
  list: []
}

 //Reducer
const reducer = createReducer(initialState, {
  [isFetching] :(state, action) => ({
    ...state,
    status: STATUS.FETCHING
  }),
  [success] : (state, action) => ({
    status: STATUS.SUCCESS,
    list: action.payload
  }),
  [failure] : (state, action) => ({
    status: STATUS.FAILURE,
    list:null
  })
})

export {actions, STATUS, reducer};