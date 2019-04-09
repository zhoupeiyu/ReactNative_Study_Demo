
import React from 'react'
import ReactDOM from 'react-dom'

// const myDiv = React.createElement('div',{id:'myDiv', title:'这个是div title'}, "divdivdiv")
// 注意：在js 文件中，默认不能那个写这种类似的HTML 得标记，否则会打包失败
// 可以使用babel 来转换这些js中的标签
// 大家注意：这种在JS中，混合写入类似于HTML 得语法，叫做JSX 语法，符合XML规范的JS
// 注意：JSX的语法得本质，还是在运行的时候，被转换成React.createElement 形式来执行 
const myDiv = <div id = 'myDiv' title = '这个是div title'> 
    divdivdiv
    <h1>
        这是一个大大的H1 
    </h1>
    <h1>
        这是一个大大的H1
    </h1>
</div>

ReactDOM.render(myDiv, document.getElementById('app'))
