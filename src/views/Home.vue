<template>


  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <h1>Home</h1> -->
    <div class="mb-3">
      <label class="form-label" >Employee ID</label>
      <input type="text" class="form-control"   id="EmployeeID" placeholder="รหัสพนักงาน" v-model="infoData.EmployeeID">
    
    </div>

    <div class="mb-3">
      <label class="form-label">Firstname</label>
      <input type="text" class="form-control" id="firstname" placeholder="ชื่อจริง" v-model="infoData.firstName">
    </div>

    <div class="mb-3">
      <label class="form-label">Lastname</label>
      <input type="text" class="form-control" id="lastname" placeholder="นามสกุล" v-model="infoData.lastName">
    </div>

    

    <!-- <div class="mb-3">
      <label class="form-label">Hour</label>
      <input type="text" class="form-control" id="level" placeholder="Level" v-model="infoData.level">
    </div> -->

    <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Time In</span>
            <b-form-timepicker v-model="infoData.timeIn" locale="en"></b-form-timepicker>
    </div>

    <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Time Out</span>
            <b-form-timepicker v-model="infoData.timeOut" locale="en"></b-form-timepicker>
    </div>

    <div class="mb-3">
      <label class="form-label">Hour</label>
      <input type="text" class="form-control" id="Hour" placeholder="ชั่วโมงการทำงาน" v-model="infoData.Hour">
    </div>

    
    <button type="submit" class="btn btn-outline-primary" @click="addUser">Save</button>
    <br>
    <br>
    <!-- <b-table striped hover :items="users"></b-table> -->
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
        infoData: {
          EmployeeID : null,
          firstName : null,
          lastName : null,
          timeIn : null,
          timeOut : null,
          Hour : null

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