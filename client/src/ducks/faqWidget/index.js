import qs from 'query-string'

const GET_USER_DETAILS = 'faq/GET_USER_DETAILS'
const REQUEST_SEND = 'faq/REQUEST_SEND'
const SUCCESS_SEND = 'faq/SUCCESS_SEND'

const initialState = {
  list: [],
  pendingMessage: false,
  receivedMessage: false,
  user: {}
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case GET_USER_DETAILS:
      return { ...state, user: action.payload }
    case REQUEST_SEND:
      return { ...state, pendingMessage: true, receivedMessage: false, list: state.list.concat([payload.message]) }
    case SUCCESS_SEND:
      return { ...state, pendingMessage: true, receivedMessage: true, list: state.list.concat([payload.message]) }
    default:
      return { ...state, pendingMessage: false, receivedMessage: false }
  }
}

export const getUserDetails = () => dispatch => {
  const searchQuery = qs.parse(window.location.search)
  if (searchQuery.firstName && searchQuery.lastName) {
    dispatch({ type: GET_USER_DETAILS, payload: { ...searchQuery } })
  }
}

export const sendMessage = message => async dispatch => {
  dispatch ({ type: REQUEST_SEND, payload: { message } })
  const res = await fetch(`/api/faq/search`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ message })
  }).then(res => res.json())
  dispatch ({ type: SUCCESS_SEND, payload: { message: res.message } })
}

export const pushMessage = message => async dispatch => {
  dispatch ({ type: SUCCESS_SEND, payload: { message } })
}