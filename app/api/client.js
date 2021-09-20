// import { create } from "apisauce";
const axios = require("axios").default;

const client = axios.create({
  baseURL: "http://37.152.189.29:2008",
});

export default client;
