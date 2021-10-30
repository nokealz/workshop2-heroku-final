<template>

  <div id="app">
    <div class="alert alert-primary" role="alert">
      <div class="btn-group" role="group" aria-label="Basic example">
      <router-link to="/" show variant="primary">Home</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/about">History</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/show">Calculator </router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/Page2">ใบลาหยุดงาน</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/Table">ประวัติการลา</router-link>
    </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #087eec;
}
</style>