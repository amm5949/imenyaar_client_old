import { loginToGetToken } from "./auth";
import client from "./client";

const endpoint = "/api/reports";

export const getReports = async (access_token) => {
  return client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  })
}
