<template>
  <router-view />
  <div id="nav">
    <navigation mark="My/Japan" class="nav_app"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>


<style>
body {
  background: #201d1d;
  margin: 0%;
}

</style>
