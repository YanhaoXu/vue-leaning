<template>
  <div class="df aic mb10">
    <slot name="avatar" :src="item.avatar" />
    <span>{{ item.text }}</span>
    <button><slot>回复</slot></button>
  </div>
</template>

<script setup>
defineProps(["item"]);
</script>

<style lang="scss" scoped></style>
