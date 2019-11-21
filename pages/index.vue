<template>
  <div>
    <app-nav />
    <div class="container-fluid p-0">
      <div class="jumbotron jumbotron-fluid bg-warning">
        <div class="container">
          <h2>&lt;/&gt;</h2>
          <small>Somehow</small>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <h2 id="discover">Discover</h2>
    </div>
    <div class="container mt-4">
      <h2>For you</h2>
    </div>
  </div>
</template>

<script>
import AppNav from "~/components/Nav.vue";
export default {
  components: {
    AppNav
  }
};
</script>