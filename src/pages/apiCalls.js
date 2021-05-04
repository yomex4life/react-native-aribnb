import axios from 'axios'

export const loginCall = async (userCredentials, dispatch) =>{
    dispatch({type: "LOGIN_START"});
    try {
        const baseUrl = "http://localhost:5000/api"
      const res = await axios.post(`${baseUrl}/login`, userCredentials)
      dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    }
    catch(err)
    {
        dispatch({type:"LOGIN_FAILURE", payload:err})
    }
}