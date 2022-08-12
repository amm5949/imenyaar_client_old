// import { create } from "apisauce";
import { create } from "axios";

const client = create({
  baseURL: "http://37.152.189.29:2008",
});

export default client;
