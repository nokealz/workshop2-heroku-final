<template>
  <div class="about">
    <h1>My Data</h1>
    <b-table striped hover :items="allUsers"></b-table>

    <button type="submit" class="btn btn-primary" @click="add"> + {{ counterR }} </button>
    <!-- <button type="submit" class="btn btn-primary" @click="addReactive"> - {{ counterReactive.ct }} </button> -->
  </div>
</template>
<script>
//import { ref, reactive } from '@vue/composition-api'
import counters from './counter.js'
export default {
  name: "about",
  setup() {
    const {counterR, add} = counters.couterIncrement(127)
    return { counterR, add }
//    const counter = ref(0);
//    function add(){
//      counter.value++;
//    }
//    const counterReactive = reactive({ ct:100});
//    function addReactive(){
//      counterReactive.ct--;
//    }
//  return {counter,add,counterReactive,addReactive}
  },
//  data() {
    // return {
    //  counter : 0
    //}
//  },
 // computed : {
//    allUsers(){
 //     return this.$store.getters.getAllUsers;
 //   }
 // },
 // methods: {
    //add(){
    //  this.counter++
    //}
 // },
};
</script>