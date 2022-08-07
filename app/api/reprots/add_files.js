import client from "../client";

export const addFiles = async (access_token, data) => {
    
  const endpoint = `/api/reports/files`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
