import {  CHANGIMG} from "../actionTypes";
const defaultState={
     num:1
}
export default (state=defaultState,action)=>{
    if(action.type===CHANGIMG){
        let newState=JSON.parse(JSON.stringify(state))
        newState.num=action.value
        return newState
      }
    return state
}