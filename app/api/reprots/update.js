import client from "../client";

export const updateReports = async (access_token, id, data) => {
    
  const endpoint = `/api/reports/${id}`;
  const response = await client.put(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
