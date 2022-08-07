import client from "../client";

export const createReport = async (access_token, data) => {
  
  const endpoint = `/api/reports`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
