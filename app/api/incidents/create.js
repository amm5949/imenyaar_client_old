import client from "../client";

export const addIncident = async () => {
  const endpoint = `/api/incidents`;
  const response = await client.post(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
