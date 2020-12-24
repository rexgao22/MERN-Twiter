import * as APIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN,
});

export const receiveErrors= (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const signup = (user) => dispatch => (
    APIUtil.signup(user).then(()=>dispatch(receiveUserSignIn()))
    .catch(err => dispatch(receiveErrors(err.response.data)))
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
}
