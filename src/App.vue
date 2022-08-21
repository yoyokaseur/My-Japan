<template>
  <router-view />
  <div id="nav">
    <navigation mark="My/Japan" class="nav_app"/>
  </div>
</template>

<script setup>
import navigation from '@/components/navigation.vue';
</script>


<style>

body {
  background: #201d1d;
  margin: 0%;
}

</style>