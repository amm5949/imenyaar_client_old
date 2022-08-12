import client from "../client";

export const getUsers = async (access_token) => {
    
  const endpoint = `/api/users`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
