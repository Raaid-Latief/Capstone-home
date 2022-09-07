<template>

  <section class="about">
  
  <div>
   <H1 class="about-me text-center">About Me</H1>
  </div>
  
  <div class="box row text-center">
    <div class="pr col-lg-6 col-md-8 col-sml-12">
  
  
  <h4>Raaid is powerbuilder and aspiring powerlifter</h4>
  <p>From starting a fitness extra-mural in highschool focused on inspiring aspiring gymrats, training pople to reach great PRs, Raaid shares the knowledge he has gathered through experience with those who share his passion for the science behind building muscle, losing fat, and gaining strength. Here are some of his accomplishments:</p>
  
  
  <hr class="line">   
  <br>
  
    <p>  110KG Bench Press </p>
  <br>
    <p>    175KG High-Bar Squat</p>
  <br>
    <p>     190KG Deadlift</p>
  <br>
   <p>       Pioneered a fitness extra-mural called Body Boost in highschool focused on teaching people the importance of building muscle and perfect form on all lifts.</p>
  <br>
   <p>     Aspiring powerlifter</p>
  <br>
    <p>      Aspirations of completing a PhD in exercise science and meshing it with the world of technology</p>
  
  <br>
  <hr class="line">  
    </div>
  
    <div class="raaid-img col-lg-6 col-md-4 col-sml-12">
  
  <p class="deadlift"><img src="https://i.postimg.cc/sD02hJx9/My-project-16.jpg" alt="dorito back" ></p>
  
  </div>
  </div>
  </section>
  </template>
  <script>
  
    AOS.init();
  
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
  
    .pr{
      background-color: #0E4204;
    width: 1000px;
    /* border-right: 5px solid #0F8600; */
    
    }
  
    .raaid-img{
      background-color: #0E4204;
    width: 500px;
    /* border-left: 5px solid #0F8600; */
  
    }
  
      
  h1{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1B8008;
    text-shadow: 2px 1px 0px black;
  
  font-size: 60px;
  }
  
  .line {
  margin-left: 20px;
  margin-top: 50px;
  color: #0F8600;
  }
  
  .about-me{
      /* background-image: url(https://i.postimg.cc/SsSc8CRp/fantasy-3281738-1920.jpg); */
      background-repeat: no-repeat;
    background-attachment: fixed;
     background-size: cover;
       height: 100%;
       padding-top: 30px;
       padding-bottom: 30px;
  }
  
  .deadlift{
    padding-top: 16px;
  height: fit-content;
  margin-top: 38px;
  
  }
  
  h2{
        font-family: 'Playfair Display', serif;
  
      color: white;
        text-shadow: 1px 1px 0px #016300;
  
      font-size: 60px;
  }
  
  h4{
    color: white;
    padding-top: 20px;
    font-size: 40px;
  }
  
  p{
    font-size: 24px;
    color: white;
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
  