<template>

  <section class="testimonials">

<h1 class="text-center mt-5 mb-5">Some transformations from close peers</h1>
<div class="box2 pt-5">
   




<div class="row text-center">
<div class="col-lg-4"> <h1 class="shrink"><figure><img src="https://i.postimg.cc/CLktcYj5/My_project_(13).jpg" alt=""><figcaption>2021</figcaption></figure></h1></div>
<div class="col-lg-4"><h4 class="socrates text-center">"It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.” - Socrates </h4></div>
<div class="col-lg-4"> <h1 class="grow"><figure><img src="https://i.postimg.cc/VkPgvC0L/My_project_(14).jpg" alt=""><figcaption>2022</figcaption></figure></h1></div>

</div>



<div class="row text-center">
<div class="col-lg-4"> <h1 class="shrink"><figure><img src="https://i.postimg.cc/NjWCZMkX/IMG-20220616-WA0005.jpg" alt=""><figcaption>2020</figcaption></figure></h1></div>
<div class="col-lg-4"><h4 class="socrates text-center">"Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well. As long as there is a concept of victors, the vanquished will also exist.” - Madara Uchiha</h4></div>
<div class="col-lg-4"> <h1 class="grow"><figure><img src="https://i.postimg.cc/mZPRHdg2/My_project_(15).jpg" alt=""><figcaption>2022</figcaption></figure></h1></div>

</div>



<div class="row text-center">
<div class="col-lg-4"> <h1 class="shrink"><figure><img src="https://i.postimg.cc/1Xxwm57f/My-project-20.jpg" alt=""><figcaption>2021</figcaption></figure></h1></div>
<div class="col-lg-4"><h4 class="socrates text-center">"We go jim !!” - Lex Little </h4></div>
<div class="col-lg-4"> <h1 class="grow"><figure><img src="https://i.postimg.cc/VNCX3C43/My-project-21.jpg" alt=""><figcaption>2022</figcaption></figure></h1></div>

</div>





</div>
  </section>
  </template>
  <script>

      
  </script>
  <style scoped>
  /* Font Style */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Roboto:wght@100;300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Tangerine&display=swap');

  .d-flex {
display: flex;
}
.socrates{
font-family: 'Amatic SC', cursive;
font-size: 50px;
color: white;
text-shadow: 2px 2px black;
}

h1{
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1B8008;
text-shadow: 2px 1px 0px black;
  font-size: 80px;
  padding: 20px;
}

img {
width: auto;
  height: 600px;
  border:2px solid black;
    box-shadow: 10px 10px 5px black;
    -moz-box-shadow: 10px 10px 5px black;
    -webkit-box-shadow: 10px 10px 5px black;
    -khtml-box-shadow: 10px 10px 5px black;

}


.grow img{
transition: 1s ease;
width: auto;
height: 650px;
}

.grow img:hover{
-webkit-transform: scale(1.2);
-ms-transform: scale(1.2);
transform: scale(1.2);
transition: 1s ease;
}



.shrink img {
transition: 1s ease;
width: auto;
height: 500px;
}

.shrink img:hover{
-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
transition: 1s ease;
}

.box1{
/* background-color: #0E4204; */
padding: 16px;
}



.box2{
background-image: linear-gradient(to bottom, #0b3603, #0c3903, #0c3c04, #0d3f04, #0e4204);
padding: 16px;
}

.test1{
background-color: #646357;
width: 900px;
/* border: 5px solid green; */
padding-right: 20px;
margin: 20px;
border-radius: 1%;
}
.test2{
background-color: #0E4204;
width: 900px;
/* border: 5px solid green; */
padding-right: 20px;
margin: 20px;
border-radius: 1%;
}

figcaption{
margin-top: 18px;
font-size: 50px;
color: white;
text-shadow: 2px 2px black;

}
  
  </style>
  
  