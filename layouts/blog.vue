<template>
  <div>
    <Navbar />
    <Category />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./blogComponents/navbar";
import Category from "./blogComponents/category";
import Footer from "./blogComponents/footer";
export default {
  components: { Navbar, Footer, Category },
};
</script>
