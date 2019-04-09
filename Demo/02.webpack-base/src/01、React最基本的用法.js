// 假设，main.js 还是我们的入口文件
// webpack -dev-server  打包好的 main.js 是托管在内存中，所以在项目根目录中看不到
// 但是我们可以认为，在项目根目录中，有一个看不见的main.js

import React from 'react' // 创建组件 虚拟Dom元素 ，生命周期
import ReactDOM from 'react-dom' // 把创建好的虚拟Dom 和组件放在页面上展示

//  2.创建虚拟DOM 元素
// 参数1：创建的元素得类型，字符串，表示元素名称
// 参数2：是一个对象或者 null,表示 当前这个DOM 元素属性
// 参数3：子节点（包括 其他虚拟DOM 获取 文本子节点）
// 参数n：其他子节点

const myh1 = React.createElement('h1', {id:'myh1', title:'这个是title'}, '这是一个大大的H1')

// 元素嵌套
const myDiv = React.createElement('div', null, '这是一个div 元素', myh1)


// 3.使用ReactDOM 把虚拟DOM渲染到页面上
// 参数1：要渲染得那个虚拟的DOM元素
// 参数2：指定的页面上得元素 

// ReactDOM.render(myh1, document.getElementById('app'))
ReactDOM.render(myDiv, document.getElementById('app'))