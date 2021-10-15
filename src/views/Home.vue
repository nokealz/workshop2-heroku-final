<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Home</h1>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">ID</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="ID" v-model="id">
    </div>
    <button type="submit" class="btn btn-primary" @click="addUser">Add</button>
    <b-table striped hover :items="users"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      id : null,
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    addUser() {
      this.$store.dispatch('setCurrentUser', this.id);
    },
  }
}
</script>