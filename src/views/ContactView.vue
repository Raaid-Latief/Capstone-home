
<template>
  <div>
    <Contact />
    <Footer />
  </div>
</template>
<script>

import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Contact, 
    Footer
},
};
</script>
<style>

html, body {
    max-width: 100%;
    overflow-x: hidden;
}

</style>