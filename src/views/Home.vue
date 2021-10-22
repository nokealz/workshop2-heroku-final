<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Home</h1>
    <div class="mb-3">
      <label class="form-label">Student ID</label>
      <input type="text" class="form-control" id="studentid" placeholder="Student ID" v-model="infoData.studentID">
    </div>
    <div class="mb-3">
      <label class="form-label">Firstname</label>
      <input type="text" class="form-control" id="firstname" placeholder="Firstname" v-model="infoData.firstName">
    </div>
    <div class="mb-3">
      <label class="form-label">Lastname</label>
      <input type="text" class="form-control" id="lastname" placeholder="Lastname" v-model="infoData.lastName">
    </div>
    <div class="mb-3">
      <label class="form-label">Level</label>
      <input type="text" class="form-control" id="level" placeholder="Level" v-model="infoData.level">
    </div>
    <button type="submit" class="btn btn-primary" @click="addUser">Adds</button>
    <b-table striped hover :items="users"></b-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
        infoData: {
          studentID : null,
          firstName : null,
          lastName : null,
          level : null
        },
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    addUser() {
      this.$store.commit('setStudentData',this.infoData)
    },
  }
}
</script>