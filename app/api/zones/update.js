import client from "../client";

export const updateZone = async (access_token, id, data) => {
  
  const endpoint = `/api/zones/${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
