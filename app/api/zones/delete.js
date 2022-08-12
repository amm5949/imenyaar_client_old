import client from "../client";

export const deleteZone = async (access_token, id) => {
  
  const endpoint = `/api/zones/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
