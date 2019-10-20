import qs from 'query-string'
import {SUCCESS_SEND} from "../welcomeWidget";

const RESOLVE_UNSOLVED = 'un/RESOLVE_UNSOLVED'
export const ADD_UNSOLVED = 'un/ADD_UNSOLVED'
const GET_UNSOLVED = 'un/GET_UNSOLVED'

const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case GET_UNSOLVED:
      return { ...state, list: payload.list }
    case ADD_UNSOLVED:
      return { ...state, list: state.list.concat([action.item]) }
    case RESOLVE_UNSOLVED:
      return { ...state, list: state.list.filter(i => i !== action.item) }
    default:
      return { ...state, pendingMessage: false, receivedMessage: false }
  }
}

export const requestUnsolved = () => dispatch => {
  let items = localStorage.getItem("unsolved") || []
  console.log("ITEMS", items)
  if (items.length > 0) {
    items = JSON.parse(items)
    items = items.map(i => ({ title: i }))
  }
  dispatch({ type: GET_UNSOLVED, payload: {list: items} })
}

export const addUnsolved = unsolved => dispatch => {
  let items = localStorage.getItem("unsolved") || []
  if (items === "[]" || items.length === 0) items = []
  items.push(unsolved)
  localStorage.setItem("unsolved", JSON.stringify(items))
  dispatch({ type: ADD_UNSOLVED, item: unsolved })
}

export const resolveUnsolved = (q, answer) => async dispatch => {
  dispatch({ type: RESOLVE_UNSOLVED, item: q })
  const res = await fetch('/api/welcome/train', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      question: q,
      answer
    })
  }).then(res => res.json())
  let items = localStorage.getItem("unsolved") || []
  items = JSON.parse(items).filter(i => i !== q)
  localStorage.setItem("unsolved", JSON.stringify(items))
  dispatch({ type: SUCCESS_SEND, payload: { message: answer } })
}