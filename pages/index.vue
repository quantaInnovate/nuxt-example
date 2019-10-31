<template>
  <div class="container">
    <navbar />
    <div class="col-12">
      <div class="row"></div>

      <p>จำนวนคนทั้งหมด {{count_data}}</p>

      <div class v-for="loda in datae.everybody_list">
        <p>{{loda.name_thai}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import navbar from "~/components/navbar.vue";
import axios from "axios";

export default {
  //TODO: get data with axios
  asyncData() {
    return axios
      .get(
        "https://h4ma9nwiu4.execute-api.ap-southeast-1.amazonaws.com/test/api/everybody"
      )
      .then(res => {
        return { datae: res.data, count_data: res.data.everybody_count };
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
