<template>
  <div class="container_card">
    <div
      v-if="get_store_style == false"
      class="card_name back_card"
      :class="{ move_left: get_store_style == false }"
    >
      <div class="write">
        <h1>{{ card_hover_price }}€</h1>
        <h2>{{ card_hover_name }}</h2>
        <p>{{ card_hover_description }}</p>
      </div>
    </div>
    <div
      class="card_name main_card"
      :class="{
        move_left: get_store_style == false,
        original_position: get_store_style == false,
      }"
    >
      <img class="image_card pointer" v-bind:src="card_img" />
      <div v-if="get_store_style" class="card_hover pointer">
        <h1>{{ card_hover_price }}€</h1>
        <h2>{{ card_hover_name }}</h2>
        <p>{{ card_hover_description }}</p>
      </div>
      <div v-else>
        <h1 class="test">YOHAN IS NOT HERE</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card_img: String,
    card_hover_name: String,
    card_hover_price: Number,
    card_hover_description: String,
  },
  computed: {
    get_store_style() {
      return this.$store.state.style;
    },
  },
};
</script>

<style scoped>
.test {
  position: relative;
  top: 500px;
  left: 500px;
}

.container_card {
  width: 300px;
  height: 400px;
}

.image_card {
  width: 300px;
  height: 400px;
}

.card_name {
  width: 300px;
  height: 400px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(53, 46, 51, 0.5);
  border-radius: 11px;
  background-color: rgba(126, 83, 115, 0.9);
  overflow: hidden;
}

.back_card {
  position: relative;
  top: 3px;
  left: 0;
  animation: slide_back 0.5s forwards;
}

@keyframes slide_back {
  to {
    transform: translateX(135px);
  }
}

.write {
  color: black;
  position: relative;
  left: 60%;
  width: 110px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card_hover {
  position: relative;
  width: 100%;
  height: 80%;
  top: 0%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), transparent 90%);
  background-position: center;
  transition: transform 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(133, 0, 122);
}

.card_name:hover .card_hover {
  transform: translateY(-70%);
}

.image_card {
  transition: transform 1s;
}

.card_name:hover .image_card {
  transform: scale(1.1, 1.1);
}

.pointer:hover {
  cursor: pointer;
}

.original_position {
  position: relative;
  top: -400px;
}

.move_left {
  transition: 0.5s left;
  position: relative;
  left: -70px;
}
</style>
