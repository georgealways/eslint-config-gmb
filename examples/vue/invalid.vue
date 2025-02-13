<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Hello from minimal Vue SFC! {{ test }}</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const test = ref( 'test');
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
