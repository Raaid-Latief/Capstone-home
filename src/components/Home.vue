<template>
    <section class="home">
      <div>
    <h1 class="text-center mt-5">Ready to train like a pro?</h1>
    <h2 class="text-center mt-5"> Welcome to ..... Fitness</h2>
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
    
    
    .home{
    padding-top: 150px;
    background-image: url(https://i.postimg.cc/SsSc8CRp/fantasy-3281738-1920.jpg);
      background-repeat: no-repeat;
      background-attachment: fixed;
         background-size: cover;
    
      }
    
        
    h1{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
      text-shadow: 1px 1px 0px #016300;
        font-size: 100px;
        padding-top: 10px;
    
    }
    h2{
          font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        color: white;
          text-shadow: 1px 1px 0px #016300;
    
        font-size: 60px;
    }
    .HomeBtn{
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 50px;
    
    }
    
    .buttons-coll {
      width: 90%;
      margin: 50px auto;
      text-align: center;
    }
    button {
    margin: 0px;
    }
    .custom-btn {
      padding: 10px 25px;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      background: transparent;
      outline: none !important;
      cursor: pointer;
      transition: all 1.1s ease;
      position: relative;
      display: inline-block;
      color: white;
    }
    .btn-2 {
      border: none;
      border-bottom: 2px solid #016300;
      border-left: 2px solid #016300;
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
      width: 2px;
    }
    .btn-2:after {
      width: 0%;
      height: 2px;
    }
    .btn-2:hover:before {
      height: 100%;
    }
    .btn-2:hover:after {
      width: 100%;
    }
    
    </style>
    
    