<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="12">
        <h1>
          <strong>{{ blog.title }}</strong>
        </h1>
        <b-row>
          <b-col cols="12">
            <div>
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
              >
                <b-card-tex>
                  {{ blog.body }}
                </b-card-tex>
              </b-card>
            </div>
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
      "singleBlog",
      // Here you can import other getters from the products.js
    ]),
    blog() {
      return this.singleBlog(this.$route.params.slug);
    },
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page description",
        },
      ],
    };
  },
};
</script>
