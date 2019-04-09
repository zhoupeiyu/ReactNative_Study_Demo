 
import React from 'react'
import ReactDOM from 'react-dom'


let a = 10
let b = 'aaaaaa'
let boo = false
let title = 'ppppp'
const arr = [
    <h2>这个是h2</h2>,
    <h3>这个是h3</h3>
]
 
const myDdiv = <div id = 'myDiv' title = 'myDiv Title'>
    我是Div 内容
    <hr/>   
    我是 a = {a}
    <hr/> 
    我是 （a + 2） = { a + 2 }
    <hr/> 
    我是字符串b = {b}
    <hr/> 
    {boo ? '条件为真' : '条件为假'}
    <hr/> 
    <p title = {title}>
        我是p 标签
    </p>
    
    <hr/>
    {arr}
    <hr/>
</div>

ReactDOM.render(myDdiv,document.getElementById('app'))

