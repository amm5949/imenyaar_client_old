import client from "../client";

export const addFiles = async () => {
    
  const endpoint = `/api/incidents/files`;
  const response = await client.post(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
