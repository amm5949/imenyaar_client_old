import client from "../client";

export const createIncident = async (access_token, data) => {
  
  const endpoint = `/api/incidents`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
