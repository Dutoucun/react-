// store仓库

// 引入管理员
import reducers from "./reducers";
// 引入仓库生成器、中间键连接器
import {createStore,applyMiddleware  } from "redux";
// 引入异步action工具redux-thunk
import reduxThunk from "redux-thunk";
// 暴露仓库跟管理员
export default createStore(reducers,applyMiddleware(reduxThunk))