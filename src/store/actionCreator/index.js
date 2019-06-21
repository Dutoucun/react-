// 引入actiontypes常量
import {NUM_ADD,NUM_REDUCE,CHANGIMG  } from "../actionTypes";

// 增加action

export const numadd=(unit)=>{
return {
    type:NUM_ADD,
    value:unit
}
}
// 减少action
export const numreduce=(unit)=>{
    return {
        type:NUM_REDUCE,
        value:unit
    }
    }
// 
export const changImg=()=>{
    return {
        type:CHANGIMG,
        value:Math.floor(Math.random()*5+1)
    }
    }
    
