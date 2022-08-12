import client from "../client";

export const getSubscriptions = async (access_token) => {
    
  const endpoint = `/api/subscription/types`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
