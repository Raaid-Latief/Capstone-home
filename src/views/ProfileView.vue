<template>
  <br>
  <br>
  <br>
<br>


  <div class="button">
          <button class="btn" @click="deleteUser(user.user_id)"><i class="fa-solid fa-trash"></i><span class="ms-2">DELETE</span></button>
          <button type="button" class="btn btn-primary ms-2 my-2" @click="Logout()">LOGOUT</button>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary ms-2 my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-pen"></i><span class="ms-2">EDIT USER</span>
          </button>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">EDIT USER</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="updateUser(user.user_id)">
                    <div class="fullname form-floating">
                      <input type="text" class="form-control mb-2" id="floatingFullName" placeholder="FULL NAME" v-model="user.fullname"/>
                      <label for="floatingFullName">FULL NAME</label>
                    </div>
                    <div class="email form-floating">
                      <input type="text" class="form-control mb-2" id="floatingEmail" placeholder="EMAIL" v-model="user.email"/>
                      <label for="floatingEmail">EMAIL</label>
                    </div>
                    <button type="submit" class="button">Save</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="button btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="button btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      



<section class="Profile">
    <div class="container-fluid">

      
      <h1 class="yourProfile">Your Profile<span class="text-center ms-2"></span></h1>
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
  </section> 
  <Footer />
  </template>
  
  <script>

import Footer from "../components/Footer.vue";
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
    methods: {
        updateUser(id) {
            return this.$store.dispatch("updateUser", id);
        },
        Logout() {
            this.$store.commit("Logout");
            this.$router.push("/");
        },
        deleteUser(id) {
            return this.$store.dispatch("deleteUser", id);
        },
    },
    components: { Footer }
};
  </script>
  
  <style scoped>
html, body {
    max-width: 100%;
    overflow-x: hidden;
}


  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

.Profile{
  padding-top: 150px;
background-image: url(https://i.postimg.cc/SsSc8CRp/fantasy-3281738-1920.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
     background-size: cover;
     overflow-x: hidden;
}

.yourProfile{
  color: black;
  text-shadow: 2px 3px 4px #016300; 
}


  .login{
    color: black;
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
    background-color: #016300;
}
  .display {
    height: 50vh;
    /* width: 100vw; */
    background-color: rgb(56, 52, 52);
  }
  




  .btn {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      padding-right: 20px;
  }
  .btn {
    background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  }
  .btn:hover {
      background-color:  #9d18cc;
      color: white; 
  }

  
  @media screen and (max-width: 560px) {
  
  }
  </style>