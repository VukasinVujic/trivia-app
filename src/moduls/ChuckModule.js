import ChuckeServise from "./service/ChuckeServise";
const ChuckModule = {
  state: {
    jokes:[] 
  },
  mutations: {
    changeJoke(state){
      state.jokes = 
    }
  },  
  actions: {
    getJokes() {
      ChuckeServise.getRandomJoke().then(response => {
        store.commit('changeJoke', response )
      });
    }
  },
  getters: {}
};
