<template>
  <header>
    <nav class="navbar navbar-dark  navbar-expand-lg bg-dark">
      <div class="container p-2">

        <router-link to="/" class="text-decoration-none">
          <a class="navbar-brand">Name</a>
        </router-link>

        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="text-decoration-none">
              <span class="nav-link">url link</span>
            </router-link>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="..." aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Поиск</button>
        </form>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

