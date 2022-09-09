<template>
    <br>
    <br>
    <br>
    <br>
    <div  class="container-fluid">
      <router-link to="/programs">
          <button type="button" class="btn btn-lg ms-3 my-2">
              GO BACK
          </button>
      </router-link>
    
      <div v-for="program in program" :key="program.program_id" class="cards mb-5 mt-5">
          <div class="row">
              <div class="image text-center col-lg-6">
                  <img :src="program.imgURL" class="img-fluid" />
              </div>
              <div class="details mt-5 col-lg-6">
                  <h5>{{ program.title }}</h5>
                  <p class="category py-2"> {{ program.category }}</p>
                 
                  <p class="description py-2"><span></span>  {{ program.description }}</p>
              </div>
              <div class="row">
              <div class="buttons mt-2 text-center col-lg-6">
                  <button @click="addToCart(program)" class="btn btn-lg ms-2 my-1">
                      ADD TO CART
                  </button>
                </div>
                <div class="price col-lg-6">
                <p class="py-2"><span></span>   R{{ program.price }}</p>
             </div> 
            </div>
           </div>
          </div>
    </div>
  </template>
  
  <script>
  export default {
      props: ["id"],
      computed: {
          program() {
              return this.$store.state.program;
          },
      },
      methods: {
          addToCart(program) {
              this.$store.commit("updateCart", program);
          },
      },
      mounted() {
          this.$store.dispatch("getProgram", this.$route.params.id);
      },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  
  .container-fluid {
      display: block;
     padding-bottom: 30px;
      width: auto;
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

  .image{
    border: 2px 2px #9d18cc;
    

  }
  
  .image img {
    width: 400px;
    min-height: 300px;
    padding-top: 40px;
    box-shadow: 10px 10px 5px black;
      -moz-box-shadow: 10px 10px 5px black;
      -webkit-box-shadow: 10px 10px 5px black;
      -khtml-box-shadow: 10px 10px 5px black;
  }
  
  .cards {
    width: auto;
    min-height: 500px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    gap: 20px;
    border: 1px solid black;
    background-image: linear-gradient(to bottom, #0b3603, #0c3903, #0c3c04, #0d3f04, #0e4204);  
    
  }
  
  /* .cards:hover img {
    opacity:0.3;
  } */
  
  .cards img:hover {
    transform:perspective(800px)       rotateY(0deg);
    opacity:1;
  }
  
  span {
      color: black;
  }
  
  button.btn {
      font-size: 16px;
      background-color: black;
      color: #fff;
      min-height: 40px;
      width: 200px;
      padding: 5px;
      text-align: center;
  }
  
  button.btn:hover {
      background-color: #fff;
      color: black; 
  }
  
.price{
    font-size: 30px;
}

  .details h5 {
      color: black;
        font-size: 35px;
      padding-left: 20px;
  }

  .py-2{

    padding-left: 20px;
  }
  
  p{
    color: white;
    padding-right: 100px;

  }

  .category{
    margin-bottom: 30px;
    font-size: 30px;
  }

  .description{
    font-size: 26px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  }

  @media screen and (max-width: 556px) {
      .cards {
          width: 350px;
      }
      .image img {
          width: 250px;
      }
  }
  @media screen and (max-width: 408px) {
      .cards {
          width: 280px;
      }
      .image img {
          width: 200px;
      }
  }
  </style>