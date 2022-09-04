<template>
    <div class="container-fluid">
      <div class="card" v-for="program in Programs" :key="program.program_id">
          <img :src="program.imgURL" alt="">
          <div class="details">
              <h3>{{ program.title }}</h3>
              <p>{{}}</p>
              <p></p>
              <p></p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: ["programs"],
  }
  </script>
  
  <style scoped>
  .card {
      width: 400px;
      height: 400px;
      border: 1px solid black;
  }
  </style>