<template>
    <div class="container-fluid">
      <h1>REGISTER<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
      <div class="output my-5">
          <form>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                              <input type="text" v-model="fullname" class="form-control"  id="exampleFormControlInput1" placeholder="John Doe">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label">Email</label>
                              <input type="email" v-model="email" class="form-control" required id="exampleFormControlInput1" placeholder="johndoe23@gmail.com">
                          </div>
                      </div>
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Password</label>
                          <input type="password" v-model="password" class="form-control" required id="exampleFormControlInput1" placeholder="password1">
                      </div>
  
                  <button type="submit" @click.prevent="Register()" class="btn">Sign up</button>
                  </div>
              </form>
          <div class="mt-5">
          <p>
            Already got an account?
            <span
              ><router-link href="#" to="/login" class="login"
                >Log In</router-link
              ></span
            >
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              fullname: "",
              email: "",
              password: "",
          };
      },
      methods: {
          Register() {
              this.$store.dispatch("Register", {
                  fullname: this.fullname,
                  email: this.email,
                  password: this.password,
              })
          }
      }
  }
  </script>
  
  <style scoped>
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
  }
  .container-fluid {
      min-height: 100vh;
  }
  .container-fluid h1 {
      color: black;
      text-shadow: 2px 3px 4px white; 
  }
  .output {
      background-color: rgba(0, 0, 0, 0.4);
    border: solid 3px black;
    margin: 20px;
    padding: 10px;
    width: 300px;
    height: 700px;
    box-shadow: 5px 5px 5px #000122;
    /* text-align: center; */
    display: block;
    margin: 0 auto;
    border-radius: 30px;
  }
  .btn-primary {
      color: #fff;
      background-color: black;
      border-color: #fff;
      width: 200px;
  }
  .btn-primary:hover {
      color: black;
      background-color: #fff;
      border-color: black;
      width: 200px;
  }
  .login {
      text-decoration: none;
  }
  </style>