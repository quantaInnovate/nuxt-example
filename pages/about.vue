<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4>About this</h4>
        <n-link to="/">
          <button class="btn btn-info">home</button>
        </n-link>
        <p>Counter :{{this.$store.state.todos.counter}}</p>
        <p>name : {{this.$store.state.todos.name}}</p>

      </div>
      <button @click="addval"  class="btn btn-dark">Add val</button>
    </div>

    <div class="col-12"></div>
  </div>
</template>

<script>
 export default{

   created(){
     this.add_val_name()
   },
   methods:{
     addval(){
      this.$store.commit('todos/increment')
     },
     add_val_name(){
       console.log("adade")
       this.$store.commit('todos/add_val',"pond")
     }
   }
 }
</script>

<style>
</style>
