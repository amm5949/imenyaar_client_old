import client from "../client";

export const updateSubscription = async (access_token, id, data) => {
    
  const endpoint = `/api/subscriptions/types/${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
