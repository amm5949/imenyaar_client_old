import client from "../client";

export const updateIncident = async (id) => {
  const endpoint = `/api/incidents/${id}`;
  const response = await client.put(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
