
<template>
  <div>
    <Home />
    <About />
    <Testimonials />
    <Footer />
  </div>
</template>
<script>
import About from "../components/About.vue";
import Footer from "@/components/Footer.vue";
import Home from "../components/Home.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  components: {
    About,
    Footer,
    Home,
    Testimonials
},
};
</script>
<style>
html, body {
    max-width: 100%;
    overflow-x: hidden;
}

  
</style>