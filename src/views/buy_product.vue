<template>
    <div class="container">
        <vitrine v-if="product != null"
            :img="product.image"
            :name="product.name"
            :description="product.Description"
            :price="product.price"
        />
    </div>
</template>

<script>
  import vitrine from "../components/vitrine.vue"

    export default {
        name: 'buy_product',
        components: {
            vitrine,
        },
        data() {
            return {
                loading: false,
                product: null,
                name: this.$route.params.id
            }
        },
        mounted() {
            this.loading = true
            fetch(`http://localhost:7000/products/${this.$route.params.id}`)
            .then(response => response.json())
            .then(response =>  {this.product = response['data']})
            .catch(error => console.log(error))
            .finally(() => this.loading = false);
        }
    }
</script>

<style scoped>
.container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>