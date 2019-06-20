import React, { Component, Fragment } from "react";
// 1、接收仓库store中的数据的一个连接器
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <Fragment> 
        <div className='App'>
        <button onClick={this.props.num_reduce}>-</button>
          <h1>{this.props.num}</h1>
          <button onClick={this.props.num_add}>+</button>
          <style jsx>
            {`
         .App{
           width: 300px;
           /* line-height: 60px; */
           margin: 0 auto;
           display: flex;
           justify-content: center;
           align-items: center
         }  
          button{
              height:30px;
              
            }
            `}
          </style>
        </div>
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
const mapDisspatch=(dispatch)=>{
  return{
    num_add:()=>{
      // 4.1创建一个action
      const action={
        type:'num_add',
        value:1
      }
      // 4.2派发action 会触发 reducer管理员的代码
      dispatch(action)
    },
    num_reduce:()=>{
      // 4.1创建一个action
      const action={
        type:'num_reduce',
        value:1
      }
      dispatch(action)
  }
}
}
// 2、将store中的数据传输到APP
export default connect(
  mapStateToProps,
  mapDisspatch
)(App);
