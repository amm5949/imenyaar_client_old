import client from "../client";

export const getSubscription = async (access_token, id) => {
    
  const endpoint = `/api/subscription/types/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
