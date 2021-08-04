<template>
  <b-navbar type="light" variant="light" class="mb-5" sticky>
    <b-navbar-nav>
      <b-nav-item
        v-for="(category, index) in categories"
        :to="`/blog/category/` + category.slug"
        :key="index"
        >{{ category.name }}</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.blogs.categories;
    },
  },
};
</script>