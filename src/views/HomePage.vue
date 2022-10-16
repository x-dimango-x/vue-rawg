<template>
  <div class="card text-bg-dark p-2 mt-3 mb-3">Сортировка</div>
  <Suspense>
    <template #default>
      <games-component/>
    </template>
    <template #fallback>
      <div class="d-flex justify-content-around">
        <div class="spinner-border text-primary m-5" role="status" style="width: 4rem; height: 4rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </template>
  </Suspense>
</template>
<script>
import {useApiStore} from "../stores/api";
import GamesComponent from "../components/GamesComponent.vue";

export default {
  name: 'HomePage',
  components: {GamesComponent},
}
</script>
