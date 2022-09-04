<template>
    <div class="container-fluid">
      <h1>PROGRAMS<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
      <div class="functions my-5">
              <button class="btn ms-2" @click="sortPrograms">
                  SORT BY PRICE <i class="fa-solid fa-arrow-up-arrow-down"></i>
              </button>
              <input class="ms-3 my-2" type="text" v-model="search" placeholder="Search" />
              <select v-model="category" class="ms-3">
                  <option value="all">All</option>
                  <option value="strength">Strength</option>
                  <option value="hypertrophy">Hypertrophy</option>
                  <option value="powerbuilding">Powerbuilding</option>
              </select>
              <button class="btn ms-3 my-2" @click="sortProgram">
                  SORT BY NAME
              </button>
      </div>
      <div class="programs">
          <div class="cards" v-for="program in Programs" :key="program.program_id">
              <div class="row">
                  <div class="col-6">
                      <img :src="program.imgURL" class="img-fluid" />
                  </div>
                  <div class="col-6">
                      <h5>{{ program.title }}</h5>
                      <p class="py-2"><span>Category</span>: {{ program.category }}</p>
                      <p class="py-2"><span>Price</span>: R{{ program.price }}</p>
                      <p class="py-2"><span>Description</span>: {{ program.description }}</p>
                  </div>
                  <!-- <div class="buttons mb-2">
                      <router-link :to="{ name: 'program', params: { id: program.product_id} }">
                      <button class="btn btn-lg ms-2 my-1">
                          VIEW PRODUCT
                      </button>
                      </router-link>
                      <button @click="addToCart(product)" class="btn btn-lg ms-2 my-1">
                          ADD TO CART
                      </button>
                  </div> -->
              </div>
          </div>
          <ProgramCard v-for="program of filteredPrograms" :key="program.program_id" :program="program" />
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "vuex";
  export default {
      // name: 'ProgramView',
      // components: {
      //     ProgramCard,
      // },
      computed: {
        Programs() {
            return this.$store.state.programs;
        },
        filteredPrograms() {
            return this.$store.state.programs?.filter((program) => {
                let isMatch = true;
                if (!program.title?.toLowerCase().includes(this.search.toLowerCase()))
                isMatch = false;
                if (this.category !== "all" && program.category !== this.category) isMatch = false;
                return isMatch;
            });
        },
    },
      mounted() {
          this.$store.dispatch("getPrograms");
      },
      data() {
        return {
            search: "",
            category: "all",
            title: "",
            imgURL: "",
            price: "",
            description: "",
        };
    },
      methods: {
          getProgram() {
              this.$store.dispatch("getProgram");
          },
          // ...mapActions(["getProgram"]),
          // addToCart(item) {
          //     this.$store.commit("updateCart", item);
          // },
          sortProgram() {
              this.$store.commit("sortProgramsByName");
          },
          sortPrograms() {
              this.$store.commit("sortProgramsByPrice");
          },
      }
  }
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  .container-fluid h1 {
      color: black;
      text-shadow: 2px 3px 4px white; 
  }
  .col-6 img {
    width: 300px;
    height: 400px;
    object-fit:cover;
    
    -webkit-box-reflect:below 2px linear-gradient(transparent, transparent, #0004);
    
    transform-origin:center;
    transform:perspective(800px) rotateY(25deg);
    transition:0.8s;
  }
  .cards {
    width:600px;
    min-height:550px;
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    gap:20px;
    border: 1px solid black;
    margin: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    
  }
  .cards:hover img {
    opacity:0.3;
  }
  .cards img:hover {
    transform:perspective(800px)       rotateY(0deg);
    opacity:1;
  }
  .products {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: 20px;
      padding: 10px;
  }
  .col-6 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 10px;
  }
  span {
      color: black;
  }
  .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
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
  input {
      min-width: 700px;
      padding: 10px;
  }
  select {
      width: 300px;
      height: 49px;
      padding: 10px;
  }
  .col-6 h5 {
      color: black;
      text-shadow: 2px 2px 2px white;
  }
  .fa-arrow-up-arrow-down{
    color: aqua;
  }
  @media screen and (max-width: 600px) {
      .buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
  }
  </style>