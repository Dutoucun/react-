import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 引入仓库
import store from "./store";
// 引入 redux和react的连接器 
import {Provider  } from "react-redux";
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));