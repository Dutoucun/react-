import { WEB } from "../actionTypes";
const defaultState={
    webNumber:0
}
export default (state=defaultState,action)=>{
    
    
    if(action.type===WEB){
        console.log(action.value);
        let newState=JSON.parse(JSON.stringify(state))
        newState.webNumber=action.value
        return newState
      }
    return state
}