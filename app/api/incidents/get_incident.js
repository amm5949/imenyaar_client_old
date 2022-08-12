import client from "../client";

export const getIncident = async (access_token, id) => {
  
  const endpoint = `/api/incidents/fetch/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
