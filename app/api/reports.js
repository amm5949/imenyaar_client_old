import { login } from "./auth";
import client from "./client";

const endpoint = "/api/reports";

export const getReports = async () => {
  const loginResponse = await login();
  const access_token = loginResponse.result.tokens.access_token;

  return client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
};
