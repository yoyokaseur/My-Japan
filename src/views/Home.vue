
<template>
  <div class="Home_container">
    <div class="card_container_grid" :class="{space: get_store_style == false}">
        <div v-for="product in products" :key="product._id">
          <card :card_hover_name="product.name" :card_img="product.image" :card_hover_price="product.price" :card_hover_description="product.Description"
          v-on:click="buy(product._id)"/>
        </div>
    </div>
  </div>
</template>

<script>
  import card from "../components/card.vue"
  export default {
    name: "Home",
    components: {
      card,
    },
    computed: {
      get_store_style() {
        return this.$store.state.style;
      }
    },
    data() {
      return {
        loading: false,
        products: null
      }
    },
    methods: {
      buy(id) {
        window.location.replace(`buy_product/${id}`);
      }
    },
    mounted() {
      this.loading = true

      fetch('http://localhost:7000/products')
      .then(response => response.json())
      .then(response => (this.products = response['data']))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
    }
  }
</script>

<style scoped>
.test {
  color: white;
  background: black;
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