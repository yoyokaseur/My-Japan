<template>
        <img v-bind:src="props.img"/>
        <div class="container">
        <h1 class="big_class">
            Nom: {{props.name}}
        </h1>
        <div class="description_class">
            description :
            <br>
            {{description}}
        </div>
        <h1 class="big_class">
            Prix: {{price}}
        </h1>
        </div>
</template>

// <script>
//     export default {
//         name: "vitrine",
//         props: {
//             img: String,
//         }
//     }
// </script>

<script setup>
import {defineProps} from 'vue'

const props = defineProps(
    {img: String, name: String, description : String, price : String}
    )
</script>

<style scoped>

img {
    position: absolute;
    width: 550px;
    height: 550px;
    left: 50px;
    top: 200px;
}

.container {
    position: absolute;
    width: 60%;
    height: 70%;
    left: 700px;
    top: 150px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: flex-start;
}

.big_class {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    font-style: oblique;
    font-size: 300%;
    height: 100px;
    background-color: gray;
    border-radius: 4%;
}

.description_class {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    font-style: oblique;
    font-size: 150%;
    height: 100px;
    background-color: gray;
    border-radius: 4%;
}


</style>