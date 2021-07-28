import axios from 'axios'

//action types
const CREATE = 'CREATE';
const SET_SINGLE = 'SET_SINGLE';
const SET_MULTIPLE = 'SET_MULTIPLE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const TOKEN = 'token'
const SET_AUTH = 'SET_AUTH'

//action creators
export const createObject = (obj) => {
	return { type: CREATE, obj };
};
export const setOneObject = (obj) => {
	return { type: SET_SINGLE, obj };
};
export const setMultipleObjects = (obj) => {
	return { type: SET_MULTIPLE, obj };
};
export const updateObject = (obj) => {
	return { type: UPDATE, obj };
};
export const deleteObject = (obj) => {
	return { type: DELETE, obj };
};

//thunks
// export const fetchProjects = () => async dispatch => {

// }

export const me = () => async dispatch => { 
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const {data} = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch({type: SET_AUTH, auth: data})
  }
}

export const authenticate = (name, password, method, history) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {name, password})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
		history.push('/');
  } catch (authError) {
    return dispatch({type: SET_AUTH, error: authError});
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {}
  }
}

//reducer
export default function(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}