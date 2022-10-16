<template>
    <div class="row row-cols-1 row-cols-md-4 g-2 mb-3">
      <div v-for="game in store.games" :key="game.id" class="col">
        <div class="card text-bg-dark">
          <img :src="game.background_image" class="card-img-top" style="height: 187px" alt="...">
          <div class="pe-2 px-2">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h4 class="card-text mt-2">{{ game.name }}</h4>
            </div>
            <div class="d-flex">
              <span>Жанры:&nbsp;</span>
              <div v-for="genre in game.genres" class="d-flex wrap me-1">
                {{ genre.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {useApiStore} from "../stores/api";

export default {
  name: "GamesComponent",
  async setup() {
    const store = useApiStore()
    await store.getApiJson(`games?page=1&page_size=1`)
        .then(r => store.games.push(...r.results))
        .catch(e => console.error(e))

    return {store}
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  mounted() {
    // this.loadPage()
    this.scroll()
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(document.documentElement.scrollTop,
            document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.loadPage()
        }
      }
    },
    loadPage() {
      this.currentPage += 1
      this.store.getApiJson(`games?page=${this.currentPage}&page_size=1`)
          .then(r => this.store.games.push(...r.results))
          .catch(e => console.error(e))
    },
  },
}
</script>
<style>
body {
  background: #232321;
}

h1 {
  color: #fff;
  padding: 10px 0;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: none;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
}

.card a {
  color: initial;
}

.card a:hover {
  text-decoration: initial;
}

.card .text-muted i {
  margin: 0 10px;
}

</style>