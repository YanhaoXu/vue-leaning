// 创建基本类型响应式函数ref
function ref(value) {
  const refObject = {
    // 5. 访问value属性
    get value() {
      // 6. 依赖收集
      track(refObject, "value");
      return value;
    },
    // 10. 赋值
    set value(newValue) {
      value = newValue;
      // 11. 派发更新
      trigger(refObject, "value");
    },
  };
  return refObject;
}

// 这会在一个副作用就要运行之前被设置
// 我们会在后面处理它
let activeEffect;

// 全局的 WeakMap<target, Map<key, Set<effect>>> 数据结构
let targetMap = new WeakMap();

function track(target, key) {
  // 获取map
  let depMap = targetMap.get(target);
  // 如果获取不到值 给depMap设置一个空map
  if (!depMap) {
    // WeakMap<target, Map>
    targetMap.set(target, (depMap = new Map()));
  }

  // 获取依赖set
  let effects = depMap.get(key);
  // 如果获取不到, 就给effect设置一个孔Set
  if (!effects) {
    // WeakMap<target, Map<key, Set>>
    depMap.set(key, (effects = new Set()));
  }

  // 如果当前激活副作用有值
  if (activeEffect) {
    // 把值装进Set
    // const effects = getSubscribersForProperty(target, key);
    effects.add(activeEffect);
  }

  console.log("targetMap", targetMap);
}

function trigger(target, key) {
  // 12. 取值effects 订阅者们
  // 获取map
  let depMap = targetMap.get(target);
  // 如果取不到值 不执行后面代码
  if (!depMap) {
    return;
  }

  // 获取订阅者们
  const effects = depMap.get(key);

  // const effects = getSubscribersForProperty(target, key);
  // 13. 让订阅者们都执行一次
  effects.forEach((effect) => effect());
}

// 魔法函数 初始化执行update 数据变化执行update
function whenDepsChange(update) {
  // effect 订阅者
  const effect = () => {
    // 2. 把effect赋值给activeEffect(当前发生的副作用)
    activeEffect = effect;
    // 3. 执行更新(执行视图渲染)
    update();
    // 7. 把当前activeEffect清空
    activeEffect = null;
  };
  effect();
}

// 创建响应式数据
const num = ref(10);
const count = ref(20);

const div = document.querySelector("#div");
const btn = document.querySelector("#btn");

// 1. 执行魔法函数
whenDepsChange(() => {
  // 4. 访问量value属性
  div.textContent = num.value;
});

whenDepsChange(() => {
  console.log("count.value", count.value);
});

// 绑定点击事件 让num.value 增长
btn.addEventListener("click", () => {
  // 赋值操作
  num.value++;
});
