<template>
  <div id="sci">
    <h1>Faculty Name : Science Sriracha</h1>
    <h2>Have : 6 Major</h2>
    <h4>Major1 : Information Technology</h4>
    <h4>Major2 : Computer Science</h4>
    <h4>Major3 : Environmental Science</h4>
    <h4>Major4 : Chemistry</h4>
    <h4>Major5 : Applied Mathematics</h4>
    <h4>Major6 : Physics</h4>

    <button>click </button>
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
  </div>
</template>

<script>
export default {
  name: "sci",
  data() {
    return {
      facultyName: "Science Sriracha",
      have: "6 Major",
      major1: "Information Technology",
      major2: "Computer Science",
      major3: "Environmental Science",
      major4: "Chemistry",
      major5: "Applied Mathematics",
      major6: "Physics",
    };
  },
};
</script>

<style>
.test {
  font-size: 7 cm;
}
#sci {
  background-color: rgb(126, 233, 236);
  color: white;
}
</style>