<template>
  <div class="container_settings">
    <ul>
      <router-link class="Home stop_underline vue_hover" to="/"
        >Home</router-link
      >
      <router-link class="About stop_underline vue_hover" to="/About"
        >About</router-link
      >
      <router-link class="Panier stop_underline vue_hover" to="/About"
        >Panier</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "Settings",
};
</script>

<style scoped>
.vue_hover:hover {
  border: solid 1px #f26c9e;
}

.stop_underline {
  color: #f26c9e;
  text-decoration: none;
  margin: 10px;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container_settings {
  position: fixed;
  top: 65px;
  left: -14rem;
  width: 14rem;
  height: 93%;
  background: black;
  color: #f26c9e;
  /* animation: display_settings_on 1s forwards; */
}

@keyframes display_settings_on {
  to {
    transform: translateX(80%);
  }
}
</style>
