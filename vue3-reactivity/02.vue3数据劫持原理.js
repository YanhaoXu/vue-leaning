/* vue3 数据劫持原理 */

// 对象类型 reactive通过Proxy 劫持对象本身
function reactive(obj) {
  // 参数1： 目标对象
  // 参数2： 属性描述符对象
  return new Proxy(obj, {
    // getter 访问器
    get(target, key) {
      // track 依赖收集
      track(target, key);
      return target[key];
    },
    // setter 设置器
    set(target, key, value) {
      target[key] = value;
      // trigger 派发更新
      trigger(target, key);
    },
  });
}

// 基本数据类型 响应式函数ref 劫持对象的value的属性
function ref(value) {
  const refObject = {
    // 访问value属性触发
    get value() {
      // track 依赖收集
      track(refObject, "value");
      return value;
    },
    // 设置value属性值触发
    set value(newValue) {
      value = newValue;
      // trigger 派发更新
      trigger(refObject, "value");
    },
  };

  return refObject;
}

/*
<template>
  {{num}} // 10 -- 11
</template>

const num = ref(10)
num.value += 1
1. 初始化执行渲染读取了num.value
2. 让num响应式数据成为这次渲染的依赖 track(refObject, "value");
3. 渲染update 就是订阅者
4. 响应式数据变化 trigger(refObject, "value"); 自动执行update方法 更新视图(A2)
*/
