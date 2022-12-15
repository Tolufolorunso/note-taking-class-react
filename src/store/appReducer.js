import {
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
 

  throw new Error(`No such action :${type}`);
};

export default reducer;
