import {
  LOGIN_BEGIN,
 LOGIN_ERROR,
 LOGIN_SUCCESS,
 LOGOUT,
 REGISTER_BEGIN,REGISTER_ERROR,REGISTER_SUCCESS
} from './action';

const reducer = (state,action) => {

  if (action.type === REGISTER_BEGIN) {
    return {...state, isLoading: true,error: "",success: ''}
  }

   if (action.type === REGISTER_SUCCESS) {
    return {...state, isLoading: false,error: "", success: action.payload}
  }

   if (action.type === REGISTER_ERROR) {
    return {...state, isLoading: false, error: action.payload, success: ''}
  }

  if (action.type === LOGIN_BEGIN) {
    return {...state, isLoading: true, error: "",success: ''}
  }

    if (action.type === LOGIN_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        error: "",
        user: action.payload.user,
        token: action.payload.token,
        success: `Welcome ${action.payload.user.fullname}`
      }
  }

   if (action.type === LOGIN_ERROR) {
    return {...state, isLoading: false, error: action.payload, success: ''}
  }

   if (action.type === LOGOUT) {
     return {
       ...state,
       isLoading: false,
       user: null,
      token:  null,
      error: "",
       success: ""
     }
  }
 

  throw new Error(`No such action :${type}`);
};

export default reducer;
