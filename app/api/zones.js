import { loginToGetToken } from "./auth";
import client from "./client";

const endpoint = "/api/zones";

export const getZones = async (token) => {
  // console.log('here => ', token)
  return client.get(endpoint, {
    headers: { Authorization: "Bearer " + token },
  })
}
export const postZones = async (zone, access_token) => {
  // console.log('here => ', token)
  const response = await client.post(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  })
  return response.data;
}