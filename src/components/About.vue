<template>

    <section class="about">
    <div>
     <H1 class="about-me text-center">About Me</H1>
    </div>
    
    <div class="row text-center">
      <div class="col-lg-8">
    
    
    <h4>Raaid is powerbuilder and aspiring powerlifter</h4>
    <p>From starting a fitness extra-mural in highschool focused on inspiring aspiring gymrats, training pople to reach great PRs, Raaid shares the knowledge he has gathered through experience with those who share his passion for the science behind building muscle, losing fat, and gaining strength. Here are some of his accomplishments:</p>
    <p> 
    
    <hr class="line">   
    <br>
    –        110KG Bench Press
    <br>
    –        175KG High-Bar Squat
    <br>
    –       190KG Deadlift
    <br>
    –        Pioneered a fitness extra-mural called Body Boost in highschool focused on teaching people the importance of building muscle and perfect form on all lifts.
    <br>
    –       Aspiring powerlifter
    <br>
    –        Aspirations of completing a PhD in exercise science and meshing it with the world of technology
    </p>
    <br>
    <hr class="line">  
      </div>
    
      <div class="col-lg-4">
    
    <img src="https://i.postimg.cc/mDfqx7Dc/My-project-10-removebg-preview-1.png" alt="dorito  back">
    
    </div>
    </div>
    </section>
    </template>
    <script>
    
    </script>
    <style scoped>
    /* Font Style */
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Roboto:wght@100;300&display=swap');
    
    body{
    /* 
    background-image: url(https://i.postimg.cc/SQGs4nFZ/gorilla-freak-wt5jg8-Wr-Jg-unsplash.jpg);
      background-repeat: no-repeat;
      background-attachment: fixed; */
    
      }
    
        
    h1{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        color: white;
      text-shadow: 1px 1px 0px #016300;
        font-size: 100px;
    
    }
    
    .line {
    margin-left: 20px;
    margin-top: 50px;
    color: blue;
    }
    
    .about-me{
        background-image: url(https://i.postimg.cc/SsSc8CRp/fantasy-3281738-1920.jpg);
        background-repeat: no-repeat;
      background-attachment: fixed;
       background-size: cover;
         height: 100%;
         padding-top: 300px;
         padding-bottom: 30px;
    }
    
    h2{
          font-family: 'Playfair Display', serif;
    
        color: white;
          text-shadow: 1px 1px 0px #016300;
    
        font-size: 60px;
    }
    
    h4{
      padding-top: 20px;
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
      color: #18cc9d;
    }
    .btn-2 {
      border: none;
      border-bottom: 2px solid #18cc9d;
      border-left: 2px solid #18cc9d;
    }
    .btn-2:before,
    .btn-2:after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      background: #18cc9d;
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
    