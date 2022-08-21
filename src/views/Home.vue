<script setup>
import card from "../components/card.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const products = ref(null);
const get_store_style = computed(() => useStore().state.style);

onMounted(async () => {
  const products_json = await (
    await fetch("http://localhost:7000/products")
  ).json();
  products.value = products_json["data"];
});

function buy(id) {
  window.location.replace(`buy_product/${id}`);
}
</script>

<template>
  <div class="Home_container">
    <div class="test_products value"></div>
    <div
      class="card_container_grid"
      :class="{ space: get_store_style == false }"
    >
      <div v-for="product in products" :key="product._id">
        <card
          :card_hover_name="product.name"
          :card_img="product.image"
          :card_hover_price="product.price"
          :card_hover_description="product.Description"
          v-on:click="buy(product._id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.test {
  color: white;
  background: black;
}

.see {
  position: absolute;
  top: 20%;
  left: 10%;
  background-color: blueviolet;
}

.card_container_grid {
  position: absolute;
  left: 15%;
  top: 189px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 80px;
}

.space {
  grid-gap: 170px;
}
</style>
