<template>
  <div class="container">
    <navbar />
    <div class="col-12">
      <div class="row">
        <n-link to="/about">about page</n-link>
      </div>
      <h4>dadasd</h4>
      <div class v-for="loda in datae">
        <p>{{loda.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import navbar from "~/components/navbar.vue";
import axios from "axios";

export default {

  //TODO: get data with store
  asyncData() {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        return { datae: res.data };
      })
      .catch(e => {
        console.log("erroe::" + e);
      });
  },

  components: {
    Logo,
    navbar
  },

  methods: {
    dasd() {
      console.log("dadasde");
    }
  },
  mounted() {
    this.dasd();
  }
};
</script>

<style>
</style>
