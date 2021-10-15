<template>
  <div id="hello">
    <h1>Name : {{ myName}}</h1>
    <h2>Tel : {{ tel }}</h2>
    <h3>Student Id : {{ studentId }}</h3>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      myName: "Yaowaluk",
      tel: "0617912798",
      studentId: "6130203519",
    };
  },
};
</script>

<style>
.test {
  font-size: 9 cm;
}
#hello {
  background-color: rgb(31, 164, 197);
  color: white;
}
</style>