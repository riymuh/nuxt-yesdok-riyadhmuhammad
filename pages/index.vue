<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="12">
        <b-jumbotron
          header="BootstrapVue"
          lead="Bootstrap v4 Components for Vue.js 2"
        >
          <p>For more information visit website</p>
          <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "blog",
};
</script>
