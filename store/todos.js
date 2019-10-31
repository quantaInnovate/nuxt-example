

//This is example easy store
export const state = () => ({
  counter: 0,
  name :''
})


export const mutations = {
  increment (state) {
    state.counter++
  },
  add_val (state,par_name){
    console.log("eeee:::"+par_name)
      state.name = par_name
  }



}
