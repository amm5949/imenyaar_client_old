import client from "../client";

export const fetchAvtivateSubscriptios = async (access_token, id) => {
    
  const endpoint = `/api/users/${id}/subscription`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
