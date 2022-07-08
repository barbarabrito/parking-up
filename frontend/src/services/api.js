import axios from "axios";

export default axios.create({
  baseURL: "https://parkingup.herokuapp.com",
});