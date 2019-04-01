import { ChuckService } from '../service/ChuckService.js';

export const ChuckModule = {
    state: {
      randomJoke: null
    },
    getters: {
      getRandomJoke(state){
        return state.randomJoke
      }
    },
    muttations: {
      setRandomJoke(state, joke){
        state.randomJoke =joke;
      }
    },
    actions: {
      fetchRandomJoke(store,next){
        ChuckService.getRandomJoke().then((joke) => {
          store.commit('setRandomJoke', joke);
          next();
        } ) 
      }
    }
};