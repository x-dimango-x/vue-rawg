<template>
  <h3>Игры:</h3>
  <div class=" row row-cols-1 row-cols-md-4 g-2">
    <div v-for="game in games" key="" class="col">
<!--      <router-link class="text-decoration-none" :to="{name: 'leagues', params:{id: country.country_id}}">-->
        <div class="card h-100 text-bg-dark p-3">
          <h4 class="card-text text-center">{{ game.name }}</h4>
        </div>
<!--      </router-link>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "GamesComponent",
  props: {
    games: {
      type: Object,
      required: true
    }
  }
}
</script>
