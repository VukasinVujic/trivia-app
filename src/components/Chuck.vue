<template></template>

<script>
import { store } from "../store.js";

export default {
  beforeRouteEnter: (to, from, next) => {
    store.dispatch("getJokes");
  }
};
</script>

<style>
</style>
