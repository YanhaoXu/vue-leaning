import { defineComponent, ref, reactive, onMounted } from "vue";
import Foo from "./Foo";
import Bar from "./Bar";

// 函数式组件
function MyChild({ msg, xx }, { slots }) {
  // 直接return jsx模板
  return (
    <div>
      <h3>函数式组件Child</h3>
      <p>msg:{msg}</p>
      <button onClick={() => xx(60)}>触发父组件的方法</button>
      <div>{slots.default("小橘猫")}</div>
      <div>{slots.king("666")}</div>
    </div>
  );
}

// jsx组件
export default defineComponent({
  setup() {
    const num = ref(10);
    const flag = ref(false);
    const list = reactive([
      { name: "小橘猫1" },
      { name: "小橘猫2" },
      { name: "小橘猫3" },
      { name: "小橘猫4" },
    ]);
    const divRef = ref();
    onMounted(() => {
      console.log("divRef.value", divRef.value);
    });

    return () => (
      <div>
        <h1>Jsx模板语法</h1>
        <h3>数据&方法</h3>
        <p>num:{num.value}</p>
        <button onClick={() => num.value++}>num++</button>
        <hr />
        <h3>属性</h3>
        <div
          className="box"
          id="div"
          style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        ></div>
        <hr />
        <h3>v-if</h3>
        <div>{flag.value ? <span>我是true</span> : <span>我是false</span>}</div>
        <button onClick={() => (flag.value = !flag.value)}>点击切换</button>
        <hr />
        <h3>v-for</h3>
        <ul>
          {list.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
        <hr />
        {/* 组件使用&插槽 */}
        <Foo>
          {{
            // 默认插槽&具名插槽&作用域插槽
            default: (props) => <div>我是默认插槽default--{props}</div>,
            king: (props) => <div>我是具名插槽king--{props}</div>,
          }}
        </Foo>
        <hr />
        {/* 子传父 on事件名=处理函数 */}
        <Bar
          msg="小橘猫"
          num={num.value}
          onUpdate:num={(data) => {
            num.value = data;
          }}
        />
        <hr />
        <h3>模板引用</h3>
        <div ref={divRef}>我是一个div</div>
        <hr />
        <MyChild msg="小橘猫" xx={(data) => (num.value = data)}>
          {{
            default: (props) => <div>我是默认插槽default--{props}</div>,
            king: (props) => <div>我是具名插槽king--{props}</div>,
          }}
        </MyChild>
      </div>
    );
  },
});
