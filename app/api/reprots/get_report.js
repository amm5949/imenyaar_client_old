import client from "../client";

export const getReport = async (access_token, id) => {
  
  const endpoint = `/api/reports/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
