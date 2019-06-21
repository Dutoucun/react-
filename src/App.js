import React, { Component, Fragment } from "react";
// 1、接收仓库store中的数据的一个连接器
import { connect } from "react-redux";
import { numadd, numreduce } from "./store/actionCreator";
class App extends Component {
  componentDidMount () {
  document.addEventListener('keyup', (e) => {
   return e.keyCode===37?this.props.num_reduce():e.keyCode===39?this.props.num_add():null 
  });
}
  render() {
    return (
      <Fragment>
        <div className='App'>
          <button onClick={this.props.num_reduce} >-</button>
          <h1>{this.props.num}</h1>
          <button onClick={this.props.num_add}>+</button>
        </div>
        <style jsx="true">
            {`
         .App{
           width: 300px;
           margin:auto;
           display: flex;
           justify-content: center;
           align-items: center;
         }  
          button{
              height:30px; 
            }
            `}
          </style>
      </Fragment>
    );
  }
}
// 3、最终store的数据通过属性props的方式来实现
// 创建一个数据映射对象
const mapStateToProps = state => {
  return {
    num: state.numbers
  };
};
// 4新增一个事件和属性映射函数
const mapDisspatch = (dispatch) => {
  return {
    num_add: () => {
      // 4.2派发action 会触发 reducer管理员的代码
      dispatch(numadd(2))
    },
    num_reduce: () => {
      dispatch(numreduce(20))
    }
  }
}
// 2、将store中的数据传输到APP
export default connect(
  mapStateToProps,
  mapDisspatch
)(App);
