import client from "../client";

export const updateIncident = async (access_token, data , id) => {
    
  const endpoint = `/api/incidents/${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
