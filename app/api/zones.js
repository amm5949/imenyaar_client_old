import { loginToGetToken } from "./auth";
import client from "./client";

const endpoint = "/api/zones";

export const getZones = async (token) => {
  // console.log('here => ', token)
  return client.get(endpoint, {
      headers: { Authorization: "Bearer " + token },
  })
}