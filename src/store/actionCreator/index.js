// 引入actiontypes常量
import {NUM_ADD,NUM_REDUCE,CHANGIMG ,WEB } from "../actionTypes";
import axios from "axios";

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
export const webNum=()=>{
    return (dispatch)=>{
        axios.get("https://easy-mock.com/mock/5cff5f447806440acf2c6856/baseList/").then(res=>{
        console.log(res)   
        const action={
                type:WEB,
                value:res.data.nums
            }
            dispatch(action)
        })
    }
    }
    
