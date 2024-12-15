<template>
  <div>
    <h1>transition 动画组件</h1>
    <button @click="$event => flag = !flag">切换</button>
    <!-- name属性定义动画名 name-6个动画class-->
    <!-- duration 动画持续时间 -->
    <!-- <Transition name="bounce" :duration="3000">
      <div class="box" v-if="flag"></div>
    </Transition> -->

    <!-- 使用自定义动画class -->
    <Transition enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__rotateOut" name="bounce" :duration="3000">
      <div class="box" v-if="flag"></div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const flag = ref(true)

</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
}

// 初始化
.test-enter-from {
  transform: rotate(45deg);
}

// 进行中
.test-enter-active {
  transition: all 0.5s;
  transform: rotate(90deg);
}

// 完成
.test-enter-to {
  transform: rotate(45deg);
}

// 初始化
.test-leave-from {
  transform: rotate(45deg);
}

// 进行中
.test-leave-active {
  transition: all 0.5s;
  transform: rotate(90deg);
}

// 完成
.test-leave-to {
  transform: rotate(45deg);
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>