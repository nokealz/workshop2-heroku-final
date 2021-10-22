<template>
  <div class="showmember">
    <h1>All Members</h1>
    <b-table striped hover :items="allUsers"> </b-table>
  </div>
</template>

<script>
export default {
  name : "Showmember",
  methods : {
    allUsers() {
      return this.$store.getters.getAllUsers;
    },
  }

}
</script>

<style>

</style>