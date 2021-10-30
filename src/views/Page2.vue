<template>


  <div class="table">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <h1>Home</h1> -->
    <div class="mb-3">
      <label class="form-label" >Employee ID</label>
      <input type="text" class="form-control"   id="id" placeholder="รหัสพนักงาน" v-model="infoData.id">
    
    </div>

    <div class="mb-3">
      <label class="form-label">Firstname</label>
      <input type="text" class="form-control" id="fname" placeholder="ชื่อจริง" v-model="infoData.Firstname">
    </div>

    <div class="mb-3">
      <label class="form-label">Lastname</label>
      <input type="text" class="form-control" id="lname" placeholder="นามสกุล" v-model="infoData.Lastname">
    </div>

    <div class="mb-3">
      <label class="form-label">วันที่ต้องการลา</label>
      <input type="text" class="form-control" id="day" placeholder="ลงวันลา" v-model="infoData.Day">
    </div>

    <div class="mb-3">
      <label class="form-label">ลาถึงวันที่</label>
      <input type="text" class="form-control" id="To" placeholder="ลงวันสิ้นสุดการลา" v-model="infoData.To">
    </div>

    <div class="mb-3">
      <label class="form-label">หมายเหตุการลา</label>
      <input type="text" class="form-control" id="day" placeholder="ลงหมายเหตุ" v-model="infoData.Note">
    </div>


    <button type="submit" class="btn btn-outline-primary" @click="addUser">Save</button>
    <br>
    <br>
    <!-- <b-table striped hover :items="users2"></b-table> -->
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
        infoData: {
          id : null,
          Firstname : null,
          Lastname : null,
          Day : null,
          To : null,
          Note : null,
          

        },
    }
  },
  computed: {
    users2() {
      return this.$store.getters.getUser2;
    }
  },
  methods: {
    addUser() {
      this.$store.commit('setStudentData2',this.infoData)
    },
  }
}
</script>