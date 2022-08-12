import client from "../client";

export const deleteUser = async (access_token, id) => {
    
  const endpoint = `/api/users/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
