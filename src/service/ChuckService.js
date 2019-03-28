import ChuckClient from "chucknorris-io";

export default class Chuck {
  constructor() {
    this.client = new ChuckClient();
  }

  getRandomJoke() {
    return this.client.getRandomJoke();
  }
}

export const chucks = new Chuck();
