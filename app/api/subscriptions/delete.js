import client from "../client";

export const deleteSubscription = async (access_token, id) => {
    
  const endpoint = `/api/subscriptions/types/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};