
<template>
    <br>
    <br>
    <br>
          <!-- <div class="container">
        <div id="login" class="d-flex justify-content-center flex-column">
          <h1 class="text-center">Login</h1>
          <form onsubmit="Login(event)" class="text-center my-3">
            <input type="email" placeholder="Email" v-model="email" />
            <input type="text" placeholder="Password" v-model="password" />
            <button type="submit" class="btn btn primary" @click.prevent="Login()">Login</button>
          </form>
          </div>
        </div> -->
  
        <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" placeholder="name"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="email address"/>
        <button>create</button>
        <p class="message">Already registered? <a href="#">Sign In</a></p>
      </form>
      <form onsubmit="Login(event)" class="text-center my-3">
        <input type="email    " placeholder="email" v-model="email"/>
        <input type="password" placeholder="password" v-model="password" />
        <button type="submit" class="btn btn primary" @click.prevent="Login()">Login</button>
        <p>
            Not Registered?
            <span
              ><router-link href="#" to="/register" class="register"
                >Register</router-link
              ></span
            >
          </p>
      </form>
    </div>
    <div v-if="user">Welcome {{ user.fullname }}</div>
  </div>
  
  
  </template>
  
  <script>
   import { mapActions } from 'vuex';
  export default {
      props: ["user.user_id"],
      computed: {
          user() {
              return this.$store.state.user;
          },
      },
    data() {
          return {
              email: "",
              password: "",
           
          };
      },
      methods: {
          Login() {
          this.$store.dispatch("Login", {
              email: this.email,
              password: this.password,
          });
      },
  },
  };  
  
  // $('.message a').click(function(){
  //    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  // });
  
  </script>
  
  <style scoped>
  /* @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  
  
  * {
      box-sizing: border-box;
  }
  
  body {
      background-color: steelblue;
      color: #fff;
      font-family: 'Muli', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
      margin: 0;
  }
  
  .container {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 20px 40px;
      border-radius: 5px;
  }
  
  .container h1 {
      text-align: center;
      margin-bottom: 30px;
  }
  
  .container a {
      text-decoration: none;
      color: lightblue;
  }
  
  .form-control {
      position: relative;
      margin: 20px 0 40px;
      width: 300px;
  }
  
  .form-control input {
      background-color: transparent;
      border: 0;
      border-bottom: 2px #fff solid;
      display: block;
      width: 100%;
      padding: 1rem 0;
      font-size: 18px;
      color: #fff;
  }
  
  .form-control input:focus,
  .form-control input:valid {
      outline: none;
      border-bottom-color: lightblue;
  
  }
  
  .btn {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      background: lightblue;
      padding: 1rem;
      font-family: inherit;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
  }
  
  .btn:active {
      transform: scale(0.98);
  }
  
  .text {
      margin-top: 30px;
      text-align: center;
  }
  
  .form-control label {
      position: absolute;
      top: 1rem;
      left: 0;
  }
  
  .form-control label span {
      display: inline-block;
      font-size: 18px;
      min-width: 5px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .form-control input:focus + label span,
  .form-control input:valid + label span {
      color: lightblue;
      transform: translateY(-30px);
  } */
  
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);
  
  .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  .form {
   
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,.form button:active,.form button:focus {
    background: #43A047;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }
  .form .register-form {
    display: none;
  }
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before, .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #EF3B3A;
  }
  body {
    background: #76b852; /* fallback for old browsers */
    background: rgb(141,194,111);
    background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;      
  }
  
  
  </style>