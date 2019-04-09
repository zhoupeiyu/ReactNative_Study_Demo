#### 									ES6语法

1. ##### let 命令和var 命令

   ```
   {
     let a = 10
     var b = 1
   }
   ```

   - 作用域

     - 在代码外部调用两个变量，let 声明的变量报错，let修饰的变量只在他所在的代码块中有效，var 声明的变量全局有效。此特性可以用在for循环中.

   - 变量提升

     - var 会有 ***变量提升*** 现象，即变量可以在声明之前使用，值为undefined。let 必须为声明以后使用。

   - 块级作用域

     - 外层代码块不受内层代码块的影响

       ```
       function f1() {
         let n = 5;
         if (true) {
           let n = 10;
         }
         console.log(n); // 5
       }
       ```

     - 允许块级作用域的任意嵌套。

       ```
       {{{{{let insane = 'Hello World'}}}}};
       ```

     - 外层最用于无法读取内层作用域得变量

       ```
       {{{{
         {let insane = 'Hello World'}
         console.log(insane); // 报错
       }}}};
       ```

     - 内层作用域可以定义外层作用域的同名变量。

       ```
       {{{{
         let insane = 'Hello World';
         {let insane = 'Hello World'}
       }}}};
       ```

     

2. const

   - 作用域

     - 只在声明所在的块级作用域内有效

       ```
       if (true) {
         const MAX = 5;
       }
       
       MAX // Uncaught ReferenceError: MAX is not defined
       ```

     - `const`命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用

       ```
       if (true) {
         console.log(MAX); // ReferenceError
         const MAX = 5;
       }
       ```

       

     - `const`实际删并不是变量的值不可改动，而是比变量指向得内存地址所保存的数据不得改动。如果是简单的数据类型(数值、字符串、布尔值)，值就保存在变量指向得那个内存地址，因此等同于常量。如果是复杂的数据(只要是对象和数组)，变量指向内存地址，保存的是指向实际数据的指针。const 只能保证指针固定(总是指向另一个固定地址)，但是指针指向的数据结构不一定不可变。

       ```
       const foo = {};
       
       // 为 foo 添加一个属性，可以成功
       foo.prop = 123;
       foo.prop // 123
       
       // 将 foo 指向另一个对象，就会报错
       foo = {}; // TypeError: "foo" is read-only
       ```

       ```
       const a = [];
       a.push('Hello'); // 可执行
       a.length = 0;    // 可执行
       a = ['Dave'];    // 报错
       ```
