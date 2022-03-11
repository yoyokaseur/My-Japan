<template>
    <div class="square_absolute">
        <card class="card_result" :card_img="image_product" :card_hover_price="prix_product" :card_hover_name="name_product" :card_hover_description="description_product"/>
        <form class="add_card" action="http://localhost:7000/products/insert" method="POST">
            <h1>Ajout de Produits</h1>
            <input v-model="name_product" name="name" type="text" placeholder="Nom du Produit">
            <p>Choose image</p>
            <div class="get_image">
                <input v-model="image_product" name=image type="url" placeholder="image_web" class="image_web">
                <h1  class="ou_txt">OU</h1>
                <input type="file" placeholder="image_file" class="image_file" @change="onFileChange">
            </div>
            <input v-model="prix_product" name=price type="number" placeholder="Prix du produit">
            <div class="option_div">
                <p>Choix Option</p>
                <select name=option id="option_select">
                    <option value="Défaut">Défaut</option>
                </select>
            </div>
            <input name=Description v-model="description_product" type="text" placeholder="Description">
            <input name=link type="url" placeholder="Lien d'achat du site Trouvée">
            <input name="url" :value="actual_url" class="hidde">
            <div class="button_form">
                <button type="reset" class="reset_form basic_button">Reset</button>
                <button type="submit" class="submit_form basic_button">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
  import card from "../components/card.vue"

    export default {
        name: 'create_product',
        components: {
            card,
        },
        data() {
            return {
                name_product: "",
                description_product: "",
                prix_product: 0,
                image_product: "",
                actual_url: `${window.location.origin}${window.location.pathname}`
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();

                reader.onload = (e) => {
                    this.image_product = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        },
    }
</script>

<style scoped>

    .hidde {
        display: none
    }

    .button_form {
        width: 80%;
        height: 5%;
        display: flex;
        justify-content: space-between;
    }

    .basic_button {
        width: 40%;
        height: 100%;
        border-radius: 4%;
        border: 1px solid black
    }

    .reset_form {
        background: red;
    }

    .submit_form {
        background:#f26c9e;
    }

    input {
        position: relative;
        width: 80%;
        height: 50px;
    }

    .ou_txt {
        position: relative;
        top: -30%;
    }

    .get_image {
        display: flex;
    }

    .image_web {
        position: relative;
        height: 20px;
    }

    .square_absolute {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .option_div {
        display: flex;
        justify-content: space-around;
    }

    .card_result {
        position: relative;
        top: 20%;
        left: 10%;
    }

    .add_card {
        position: relative;
        top: 65px;
        background: black;
        width: 54%;
        height: 93%;
        color: #f26c9e;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-top-left-radius: 2%;
        
    }

    @media only screen and (max-width: 700px) {
        .add_card {
            width: 100%;
            top: 30%;
        }
    }

</style>