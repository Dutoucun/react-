import React, { Component, Fragment } from "react";
// 1、接收仓库store中的数据的一个连接器
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Fragment> 
        <div className='App'>
        <button>-</button>
          <h1>{this.props.num}</h1>
          <button>+</button>
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
// 2、将store中的数据传输到APP
export default connect(
  mapStateToProps,
  null
)(App);
