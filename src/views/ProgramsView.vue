<template>
  <br>
  <br>

  <div class="container-fluid">
<h1 class="text-center mt-5">Choose from our wide selection of carefully curated Programs</h1>
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
      
        <div class="row">
            <div class="container">
              <div class="row">
              <div class="cards mx-auto text-center lg-col-4 col-md-6 mb-5"  v-for="program in Programs" :key="program.program_id">
                  <img :src="program.imgURL" class="img-fluid" />
  <div class="card-body">
    <div class="row">
      <div class="card-title">
          <h4 class="title text-center">{{ program.title }}</h4>
          <p class="price py-2"> R{{ program.price }}</p>
          <p class="category py-2"><span>Category</span>: {{ program.category }}</p>
      </div>
      <div class="buttons mb-2">
                  <router-link :to="{ name: 'program', params: { id: program.program_id} }">
                  <button class="btn btn-lg ms-2 my-1">
                      VIEW PRODUCT
                  </button>
                </router-link>
                
<button @click="addToCart(program)" class="btn btn-lg ms-2 my-1">
                      ADD TO CART
                  </button> 
    </div>
    <hr />
    
    
  </div>
</div>
</div>
</div>
</div>




        </div>
        <div v-if="filteredPrograms">
          <ProgramCard v-for="program of filteredPrograms" :key="program.program_id" :program="program" />
      </div>
      <div v-else class="loader">
      </div>
  </div>
  </div>

  <div>
<Footer />
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
import Footer from "@/components/Footer.vue";
export default {
  props: ["program_id"],
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
              if (this.category !== "all" && program.category !== this.category)
                  isMatch = false;
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
      ...mapActions(["getProgram"]),
      addToCart(program) {
          this.$store.commit("updateCart", program);
      },
      sortProgram() {
          this.$store.commit("sortProgramsByName");
      },
      sortPrograms() {
          this.$store.commit("sortProgramsByPrice");
      },
  },
  components: { Footer }
}
</script>

<style scoped>

  
html, body {
  max-width: 100%;
  overflow-x: hidden;
}

.flex-container
{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
}
.flex-container div.flex
{
  flex: auto;
  width: 200px;
  margin: 0;
}
.flex-container div.flex img
{ 
  width: 100%; 
  height: auto;
}

h1{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1B8008;
text-shadow: 2px 1px 0px black;
  font-size: 65px;
  padding: 20px;
}

.btn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.btn {
  background-color: #4CAF50; 
border: none;
color: white;
padding: 15px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;

}
.btn:hover {
    background-color:  #9d18cc;
    color: white; 
}

img{

  width: auto;
  height: 800px;
border:2px solid black;
    box-shadow: 10px 10px 5px black;
    -moz-box-shadow: 10px 10px 5px black;
    -webkit-box-shadow: 10px 10px 5px black;
    -khtml-box-shadow: 10px 10px 5px black;

}

.title{
  color: #1B8008;
    text-shadow: 2px 1px 0px black;
  font-size: 45px; 
  padding: 8px;
}
.price{
  font-size: 40px;
}

.category{
  font-size: 30px;
}

/* loader */
.loader {
border: 16px solid #f3f3f3; /* Light grey */
border-top: 16px solid #3498db; /* Blue */
border-radius: 50%;
width: 120px;
height: 120px;
animation: spin 2s linear infinite;
text-align: center;
position: relative;
  top: 20%;
  left: 50%;
 
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}


</style>