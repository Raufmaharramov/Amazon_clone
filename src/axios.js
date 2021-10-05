import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ebe87.cloudfunctions.net/api"
  // local host link "http://localhost:5001/clone-ebe87/us-central1/api" // this is where we have API(cloud function) URL
});

export default instance;
