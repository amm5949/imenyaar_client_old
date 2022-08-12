import client from "../client";

export const geteZone = async (access_token, id) => {
  
  const endpoint = `/api/zones/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
