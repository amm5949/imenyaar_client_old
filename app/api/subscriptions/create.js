import client from "../client";

export const createSubscription = async (access_token, data) => {

  const endpoint = `/api/subscription`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
