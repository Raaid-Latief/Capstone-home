<template>

  

  <nav>
    <h1 class="logo"><img src="https://i.postimg.cc/DfSMW42V/My_project__11_-removebg-preview.png" alt=""></h1>
    <div class="nav-links">
     <router-link to="/">Home</router-link> 
    <router-link to="/Programs">Programs</router-link>
     <router-link to="/Contact"><i class="fa-solid fa-address-book"></i></router-link>
     <!-- <router-link to="/AdminProgram">Admin</router-link> -->
     <router-link to="/Cart"><i class="fa-solid fa-cart-shopping"></i></router-link>
       <router-link to="/Login"><i class="fa-solid fa-user"></i></router-link>
      </div>
    
  </nav>
  <label for="nav-toggle" title="Show navbar" class="nav-toggle-label">
    <span></span>
  </label>


  
</template>
<script>
export default {
  name: "Nav",
};


</script>
<style scoped>

  img{
    width: auto;
    height: 74px;
    padding-left: 30px;
   

  }

  nav{
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:  #0E4204;
    position: fixed;
    z-index: 9999;
    padding-right: 100px;



  }
.nav-links{
  text-decoration: none;
  padding: 2px;
  color: white;
  
}

a:link,
a:visited {
  color: white;
  text-decoration: none;
  padding: 10px;
  margin-left: 5px;
  
}

a:hover {
 text-decoration: underline;
  color: green;
  text-shadow: 1px 1px 0px black;
}
</style>