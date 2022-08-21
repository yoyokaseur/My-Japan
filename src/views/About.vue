<template>
  <div class="about" @click="msg++">
    <h1 v-if="msg % 2 == 0">Click for test setup counter {{ msg }}</h1>
    <h1 v-else>Click for test setup counter {{ msg }} is not pair</h1>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

const msg = ref(20);

console.log(msg.value);
onBeforeMount(() => {
  msg.value++;
});
console.log(msg.value);
</script>

<style scoped>
.about {
  position: absolute;
  top: 20%;
  left: 10%;
  background-color: blueviolet;
}

.about:hover {
  cursor: pointer;
}
</style>
