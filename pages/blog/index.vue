<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="8">
        <h1><strong>Artikel Terbaru</strong></h1>
        <b-row>
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
                <b-card-text>
                  Some quick example text to build on the card.
                </b-card-text>

                <b-button :to="`/blog/` + blog.slug" block>Detail</b-button>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="4">
        <h1><strong>Artikel Populer</strong></h1>
        <b-row>
          <b-col cols="12">
            <b-card no-body class="overflow-hidden" style="max-width: 540px">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://picsum.photos/400/400/?image=20"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body class="d-flex flex-column">
                    <b-card-text>
                      Here is the description of the course
                    </b-card-text>
                    <b-button href="#" class="mt-auto">Detail</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "blog",
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs;
    },
  },
};
</script>
