// store仓库

// 引入管理员
import reducers from "./reducers";
// 引入仓库生成器
import {createStore  } from "redux";

// 暴露仓库跟管理员
export default createStore(reducers)