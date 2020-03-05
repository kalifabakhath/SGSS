import * as authaction from './actiontypes'
const initialstate = {
    user:null
}
export const adduser = (state={initialstate},actions) =>{
    switch(actions.type){
        case authaction.SIGN_UP:
            return {...state,users:actions.payload}
        default:
            return state;
    }
};