import client from "../client";

export const getUser = async (access_token, id) => {
    
  const endpoint = `/api/users/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
