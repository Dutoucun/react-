// reducers管理员

// 引入自定义变量
import {NUM_ADD,NUM_REDUCE  } from "../actionTypes";
// 定义一个默认数据
const defaultState = {
  numbers: 100
};

// 把管理员和数据一并暴露出去 
// state 为外面可以使用得到的数据
// action判断处理全局数据
export default (state = defaultState, action) => {
  if(action.type===NUM_ADD){
    let newState=JSON.parse(JSON.stringify(state))
    newState.numbers+=action.value
    return newState
  }
  if(action.type===NUM_REDUCE ){
    let newState=JSON.parse(JSON.stringify(state))
    newState.numbers-=action.value
    return newState
  }
  return state;
};
