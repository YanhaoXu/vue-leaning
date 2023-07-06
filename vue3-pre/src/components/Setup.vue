<template>
  <div class="container">
    <h1 @click="say()">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  setup() {
    console.log("setup 执行了");
    console.log(this);

    const msg = "hi vue3";

    const say = () => {
      console.log(msg);
    };

    return { msg, say };
  },
  beforeCreate() {
    console.log("beforeCreate执行了");
    console.log(this);
  },
};
</script>
