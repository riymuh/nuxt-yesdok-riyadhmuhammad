<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="12">
        <h1>
          <strong>Artikel {{ category.name }}</strong>
        </h1>
        <b-row v-if="blogs.length > 0">
          <b-col cols="4" v-for="(blog, index) in blogs" :key="index">
            <div>
              <b-card
                :title="blog.title"
                :img-src="
                  `https://source.unsplash.com/random/200x200?sig=` +
                  blog.blog_id
                "
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <b-button :to="`/blog/` + blog.slug" block>Detail</b-button>
              </b-card>
            </div>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="4">
            <div>Data tidak tersedia</div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  layout: "blog",
  computed: {
    ...mapGetters("blogs", [
      "singleCategory",
      "filterByCategory",
      // Here you can import other getters from the products.js
    ]),
    category() {
      return this.singleCategory(this.$route.params.category);
    },
    blogs() {
      return this.filterByCategory(this.category.category_id);
    },
  },
};
</script>
