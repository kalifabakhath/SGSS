import * as authtypes from './actiontypes'

export const adduser = (user) =>({
    type:authtypes.SIGN_UP,
    payload:user
})