<template>
<div class="container">
    <!-- Dje si Chuck! {{ randomJoke.value }} -->
    <div class="card" style="width: 18rem;">
      <img class="card-img-top"
           :src="randomJoke.iconUrl"
           alt="Card image cap"
      >
      <div class="card-body">
        <p class="card-text"
           v-text="randomJoke.value">
        </p>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { store } from "../store.js";

export default {
  name: 'Chuck',
  computed: {
    ...mapGetters({
      randomJoke: 'getRandomJoke'
    })
  },
  methods: {
    ...mapActions([
      'fetchRandomJoke'
    ])
  },

  beforeRouteEnter: (to, from, next) => {
    store.dispatch("fetchRandomJoke", next)
  }
}
</script>

<style>
</style>



