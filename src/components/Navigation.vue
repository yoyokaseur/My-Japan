<template>
    <div class="container_nav">
        <i class="fas fa-bars border_line pointer settings_button" @click="settings_display"></i>
        <router-link title="Acceuil" class="mark_site border_line pointer" to="/">{{mark}}</router-link>
        <form class="container_input">
            <input type="text" class="nav_input">
            <button type="submit" title="Rechercher" class="button_input pointer">
                <i class="fas fa-search"></i>
            </button>
        </form>
        <button class="change_style" @click="change_style_card">
            <div class="change_style_rond">
            </div>
        </button>
        <router-link class="About_settings pointer border_line" to="/About">About</router-link>
        <router-link class="panier_settings pointer border_line" to="/">Panier</router-link>
    </div>
    <settings class="settings_base"/>
</template>

<script>

import Settings from './Setting.vue'

export default {
    name: "Navigation",
    components: {
        Settings,
    },
    data() {
        return {
            settings_counter: 0,
            settings_active: false,
            card_style: true,
        }
    },
    props: {
        mark: String,
    },
    methods: {
        settings_display() {
            if (this.settings_counter % 2 === 0) {
                this.settings_active = true
                document.querySelector('.settings_button').setAttribute("style", "transform: rotate(-90deg)");
                document.querySelector('.settings_base').setAttribute("style", "transform: translateX(100%)");
            } else {
                this.settings_active = false
                document.querySelector('.settings_button').setAttribute("style", "transform: rotate(0deg)");
                document.querySelector('.settings_base').setAttribute("style", "transform: translateX(-100%)");
            }
            this.settings_counter++
        },
        change_style_card() {
            const change_style_color = document.querySelector('.change_style')
            const change_style_rond = document.querySelector('.change_style_rond')

            this.$store.commit('change_style');
            if (this.card_style == true) {
                change_style_color.setAttribute("style", "background: rgb(133, 0, 122)");
                change_style_rond.setAttribute("style", "left: 40px");
            } else {
                change_style_color.setAttribute("style", "background: #201d1d");
                change_style_rond.setAttribute("style", "left: 0px");
            }
            this.card_style = (this.card_style == false)
        }
    },
};
</script>

<style scoped>

.change_style {
    position: relative;
    width: 70px;
    height: 30px;
    -webkit-appearance: none;
    background: #201d1d;
    border-radius: 20px;
    border-color: #f86fa1;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
    transition: 0.5s;
}

.change_style_rond {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    top: -2px;
    left: 0;
    background: #f26c9e;
    transform: scale(1.1);
    transition: 0.5s;
}

.settings_base {
    transition: transform 0.5s;
}

.fa-bars {
    width: 20px;
    height: 20px;
}

.container_nav {
    position: fixed;
    top: 0;
    height: 65px;
    width: 100%;
    margin: 0;
    background: black;
    color: #f26c9e;
    font-size: 150%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.mark_site {
    font: Changa One;
}

.nav_input {
    position: relative;
    border-radius: 0%;
    left: 0%;
    width: 90%;
    height: 100%;
}

.container_input {
    display: flex;
    width: 40%;
    height: 50%;
}


.button_input {
    position: relative;
    width: 15px;
    top: 0px;
    left: -5%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button_input:hover .fa-search {
    color: #f26c9e;
}

.border_line:hover {
    border: 1px solid #f26c9e;
}
.pointer {
    cursor: pointer;
    color: #f26c9e;
    text-decoration: none;
}

.settings_button {
    transition: transform 0.5s;
}

@media (min-width: 1400px) {
    .fa-bars {
        position: relative;
        left: -2%;
    }
}

@media (max-width: 500px) {
    .About_settings, .panier_settings{
        display: none;
    }
    .fa-bars {
        left: 0%;
    }
}

</style>