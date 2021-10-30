<template>
  <div class="about">
    <!-- <h1>My Data</h1> -->
    <b-table striped hover :items="allUsers"> </b-table>
  </div>
</template>

<script>
export default {
  name: "about",

  computed: {
    allUsers() {
      return this.$store.getters.getAllUsers;
    },
  },
  methods: {},
};
</script>

<style>
</style>