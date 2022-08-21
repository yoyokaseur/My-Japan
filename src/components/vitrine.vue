<template>
  <div class="body_flex">
    <img v-bind:src="props.img" />
    <div class="description_product">
      <h1 class="name">
        {{ name }}
      </h1>
      <div class="description_class">
        {{ description }}
      </div>
      <h1 class="big_class">Prix: {{ price }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  img: String,
  name: String,
  description: String,
  price: String,
});
</script>

<style scoped>
img {
  position: relative;
  width: 400px;
  height: 550px;
  top: 10%;
  border-radius: 2%;
}

.name {
  position: relative;
  width: 80%;
  height: 20%;
}

.body_flex {
  position: absolute;
  display: flex;
  left: 10%;
  width: 80%;
  height: 90%;
  flex-wrap: wrap;
}

.description_product {
  position: relative;
  width: 50%;
  height: 700px;
  left: 8%;
  top: 5%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.692);
  /* border: 1px solid #ffffff; */
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-start;
  color: #f26c9e;
}

@media (max-width: 1100px) {
  .description_product {
    width: 100%;
    left: 0%;
  }
  .body_flex {
    justify-content: center;
  }
}
</style>
