<template>

    <section class="testimonials">
<h1 class="text-center mt-5 mb-5">Some transformations from close peers</h1>



<div class="box1 mb-5">
<div class="row text-center">
  <div class="col-lg-3"> <h1 class="img"><figure><img src="https://i.postimg.cc/CLktcYj5/My_project_(13).jpg" alt=""><figcaption>Before</figcaption></figure></h1></div>
  <div class="col-lg-3"> <h1 class="img"><figure><img src="https://i.postimg.cc/VkPgvC0L/My_project_(14).jpg" alt=""><figcaption>After</figcaption></figure></h1></div>
  <div class="test1 col-lg-6"></div>
</div>
</div>

<div class="box2">
<div class="row text-center">
  <div class="col-lg-3"> <h1 class="img"><figure><img src="https://i.postimg.cc/NjWCZMkX/IMG-20220616-WA0005.jpg" alt=""><figcaption>Before</figcaption></figure></h1></div>
  <div class="col-lg-3"> <h1 class="img"><figure><img src="https://i.postimg.cc/mZPRHdg2/My_project_(15).jpg" alt=""><figcaption>After</figcaption></figure></h1></div>
  <div class="test2 col-lg-6"></div>
</div>
</div>




    </section>
    </template>
    <script>

        
    </script>
    <style scoped>
    /* Font Style */
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Roboto:wght@100;300&display=swap');
    
    .d-flex {
  display: flex;
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

.box1{
  /* background-color: #0E4204; */
padding: 16px;
}



.box2{
  background-color: #1B8008;
padding: 16px;
}

.test1{
  background-color: #1B8008;
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


.flip-card {
  background-color: transparent;
  width: 500px;
  height: 300px;
  perspective: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform .98s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-face, .flip-card-behind {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-face {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-behind {
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.la {
  background-image: linear-gradient(to right top, #ff9bf7, #ff90c7, #ff9c89, #ffbe4d, #f8e526);
}

.hawai {
  background-image: linear-gradient(to right bottom, #9bf2ff, #79e4ff, #7cd0ff, #a6b6ff, #d994ff);
}
    
    </style>
    
    