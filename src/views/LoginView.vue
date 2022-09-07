<template>
  <div>
    <Login />
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Login from "@/components/Login.vue";
export default {
  components: {
    
    Footer,
    Login
},
};
</script>
<style>
html, body {
    max-width: 100%;
    overflow-x: hidden;
}

a:link,
a:visited {
  color: #5D6063;
  text-decoration: none;
  padding: 3px;
  
}

a:hover {
  text-decoration: underline;
  color: green;
}
</style>