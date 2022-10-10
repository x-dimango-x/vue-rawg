<template>
  <!--  games-->
  <h3>Игры:</h3>
  <div class="row row-cols-1 row-cols-md-3 g-2">
    <div v-for="game in games.results" key="" class="col">
      <!--      <router-link class="text-decoration-none" :to="{name: 'leagues', params:{id: country.country_id}}">-->
      <div class="card h-100 text-bg-dark p-3">
        <!--        <div class="card-header">-->
        <!--          <div v-for="platform in game.platforms" class="text-wrap">-->
        <!--            <span>{{ platform.platform.name }}&nbsp;</span>-->
        <!--          </div>-->
        <!--        </div>-->
        <img :src="game.background_image" class="card-img-top" style="height: 187px" alt="...">
        <div class="d-flex align-items-center justify-content-between mt-3">
          <h4 class="card-text mt-2">{{ game.name }}</h4>
        </div>
        <div class="d-flex">
          <span>Жанры:&nbsp;</span>
          <div v-for="genre in game.genres">
            <span>{{ genre.name }}&nbsp;</span>
          </div>
        </div>
<!--        <p class="card-text">Метакритика:{{ game.metacritic }}</p>-->
      </div>
      <!--      </router-link>-->
    </div>
  </div>
  <!--  endgames-->
</template>
<script>
import {useApiStore} from "../stores/api";

export default {
  name: 'HomePage',
  setup() {
    const store = useApiStore()
    return {store}
  },
  data() {
    return {
      games: [],
    }
  },
  mounted() {
    this.store.getApiJson('games?page=2&page_size=1').then(res => this.games = res)
  }
}
// name, released, background_image, rating, rating_top,
</script>
