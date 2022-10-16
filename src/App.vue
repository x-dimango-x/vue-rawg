<script setup>

import HeaderComponent from "./components/HeaderComponent.vue";
</script>
<template>
  <HeaderComponent/>
  <router-link to="/"/>
  <div class="container text-light mt-2">
    <router-view/>
  </div>
<!--  <footer style="margin-top: 1000px">-->

<!--  </footer>-->
</template>
