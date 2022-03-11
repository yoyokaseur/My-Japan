<template>
  <div class="about" @click="msg++">
    <h1 v-if="msg % 2 == 0">Click for test setup counter {{msg}}</h1>
    <h1 v-else>Click for test setup counter {{msg}} is not pair</h1>
  </div>
</template>


// <script>
// import { ref } from 'vue'

// export default {
//   name: 'about',
//   setup() {
//     const count = ref(12)
//     return {
//       count
//     }
//   }
// }

// </script>

<script setup>
  import {ref} from 'vue'
  const msg = ref(20)
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