<template>
    <div class="container-fluid">
      <h1>MY PROFILE<span class="text-center ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
      <div class="row my-5 mx-4">
      
        <div class="acc col-lg-7 p-3 my-2">
          <h4>Account Details</h4>
          <div class="row">
            <div class="col-lg-6">
              <p>Username:<span class="ms-2">{{ user.fullname }}</span></p>
              <p>Join Date:<span class="ms-2">{{ user.joinDate }}</span></p>
            </div>
            <div class="col-lg-6">
              <p>Email:<span class="ms-2">{{ user.email}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
        import { mapActions } from 'vuex';
  export default {
    // computed: {
    //   user() {
    //     console.log(this.$store.state.user);
    //     return this.$store.state.user;
    //   },
    // },
  
    props: ["user.user_id"],
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    // mounted() {
    //   this.$store.dispatch("getUser", this.$route.params.id);
    // },
  };
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  .container-fluid {
    overflow: hidden;
  }
  
  .container-fluid h1 {
    color: black;
    text-shadow: 2px 3px 4px white;
  }
  
  /* .row {
    width: 1350px;
  } */
  
  .col-lg-5,
  .col-lg-7 {
    border: 1px solid black;
  }
  
.acc{
    background-color: aqua;
}
  .display {
    height: 50vh;
    /* width: 100vw; */
    background-color: rgb(56, 52, 52);
  }
  
  
  @media screen and (max-width: 560px) {
  
  }
  </style>