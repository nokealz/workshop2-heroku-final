<template>
  <div id="test" class="color">
      
        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">user</span>
        <input type="text" class="form-control" aria-label="Sizing example input" v-model="usrName">
    </div>

    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">password</span>
        <input type="text" class="form-control" aria-label="Sizing example input" v-model="usrPass">
    </div>

    <div class="container">
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">color</span>
        <input type="text" class="form-control" aria-label="Sizing example input" v-model="color">
    </div>

    <div v-bind:style="{'background-color': color}">
        color :{{color}}
        </div>
        <div>
        show :  <br>
        User : {{usrName}} <br> 
        Password : {{usrPass}}
        </div>
    </div>

      
  </div>
</template>

<script>
export default {
  name : "test",
  data() {
    return{
      fName: "Krit",
      imgName : "Krit",
      url : "https://pbs.twimg.com/profile_images/1285250959866642446/fhGudByH_400x400.jpg",
      color : "",
      celsius : 30,
      dataPumu: ["หัว","ก้อย"],
      name : "Yaowaluk Montreewong",
      text : "click",
      myInfo:{
          myName: "Yaowaluk",
          myNickname: "Mine",
          myStudentID: "6130203519",
      },
      hideShown : true,

      usrName: null,
      usrPass: null,
      
    }
  },
    computed: {
        fahrenheit(){
            let result = this.celsius*1.8+32;
            return result;
        },
        random() {
            return Math.random() > 0.5 ? 1 : 0;
        },
        show() {
            return this.dataPumu[this.random];
        },
        labelBotton() {
            return this.hideShown ? "Hide" : "Show";
        }
    },
    methods:{
        alertMsg(p1, p2, e){
            alert(`You ${e.type} the botton at ${e.clientX}, ${e.clientY}` );
            alert(`parameter ${p1} , ${p2}` );
        },
        }
    }
</script>

<style>
    .tmp{
        background-color: blanchedalmond;
        color: brown;
    }
    .tmp2{
        background-color:cornsilk;
    }
</style>