<template>
  <div class="table">
    <!-- <h1>My Dataiuklui</h1> -->
    <b-table striped hover :items="allUsers2"> </b-table>
  </div>
</template>

<script>
export default {
  name: "table",

  computed: {
    allUsers2() {
      return this.$store.getters.getAllUsers2;
    },
  },
  methods: {},
};
</script>

<style>
</style>