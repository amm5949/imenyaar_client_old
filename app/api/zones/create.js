import client from "../client";

export const createZone = async (access_token, data) => {
  
  const endpoint = `/api/zones`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
