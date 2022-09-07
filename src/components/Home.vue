<template>
  <section class="home">
    <div class="row">
    <div class="headings col-lg-8 col-md-8 col-sml-12">
  <h1 class="text-center mt-5">Ready to train like a pro?</h1>
  <h2 class="text-center mt-5"> Welcome to ..... Fitness</h2>
  </div>
  <div class="col-lg-4 col-md-4 text-center">
  <img  src="https://i.postimg.cc/DfSMW42V/My_project__11_-removebg-preview.png" alt="">
  <p class="tag">Veni, Vidi, Vici</p>
  </div>
  </div>
   
  <div class="HomeBtn">
   <router-link to="/programs"><button class="custom-btn btn-2 text-center mb-1">SHOP MY PROGRAMS</button></router-link>
  </div>
  
  <div>
  
  </div>
  </section>
  </template>
  <script>
  
  </script>
  <style scoped>
  
  /* Font Style */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Roboto:wght@100;300&display=swap');
  
  @import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');
  
  html, body {
      max-width: 100%;
      overflow-x: hidden;
  }
  
  
  .home{
    background-image: url(https://i.postimg.cc/SNMDHk5B/My-project-19.jpg);
  padding-top: 150px;
    background-repeat: no-repeat;
    background-attachment: fixed;
       background-size: cover;
       overflow-x: hidden;
  
    }
  
      
  h1{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #1B8008;
    text-shadow: 2px 1px 0px black;
      font-size: 120px;
  
  }
  h2{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
      color: #1B8008;
        text-shadow: 2px 1px 0px black;
  
      font-size: 60px;
  }
  
  .headings{
    padding-bottom: 100px;
  }
  
  img
  {
      width: auto;
      height: 450px;
   
  
    }
  
  .tag{
    font-family: 'Tangerine', cursive;
  font-size: 130px;
  padding-top: 30px;
  }
  
  
  .HomeBtn{
    display: flex;
    justify-content: center;
    width: 100%;
  
    margin-bottom: 100px;
  
  }
  
  .custom-btn {
    padding: 10px 25px;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    background: transparent;
    outline: none !important;
    cursor: pointer;
    transition: all 1.1s ease;
    position: relative;
    display: inline-block;
    color: #1B8008;
  }
  .btn-2 {
    border: none;
    border-bottom: 4px solid #016300;
    border-left: 4px solid #016300;
  }
  .btn-2:before,
  .btn-2:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: #016300;
    transition: all 0.3s ease;  
  }
  .btn-2:before {
    height: 0%;
    width: 4px;
  }
  .btn-2:after {
    width: 0%;
    height: 3px;
  }
  .btn-2:hover:before {
    height: 100%;
  }
  .btn-2:hover:after {
    width: 100%;
  }
  
  </style>
  
  