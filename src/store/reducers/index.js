// reducers管理员

// 定义一个默认数据
const defaultState = {
  numbers: 100
};

// 把管理员和数据一并暴露出去
// state 为外面可以使用得到的数据
// action判断处理全局数据
export default (state = defaultState, action) => {
  return state;
};
