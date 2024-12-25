let A0 = 1;
let A1 = 2;
// 产生的作用
let A2;

// 副作用函数update(里面代码执行影响了外面)
// update函数作为依赖的订阅者(subscriber)
function update() {
  // A0, A1 称为A2依赖(dependency)
  A2 = A0 + A1;
}

// // 初始化执行一次
// update();

// console.log(A2); //3

// // 更新数据
// A0 = 2;
// // 再执行一次
// update();
// console.log(A2); // 仍然是4

// // 纯函数
// function add() {
//   console.log("1+2", 1 + 2);
// }

// 魔法函数
whenDepsChange(update);
/*
whenDepsChange
1. 初始化执行update方法
2. 响应式数据-依赖被读取了 update方法就称为响应式数据-依赖的订阅者
3. 当响应式数据变化 重新运行订阅者update方法
*/

/*
<template>
  {{num}} // 10 -- 11
</template>

const num = ref(10)
num.value += 1
1. 初始化执行渲染读取了num.value
2. 让num响应式数据成为这次渲染的依赖
3. 渲染update 就是订阅者
4. 响应式数据变化 自动执行update方法 更新视图(A2)
*/
