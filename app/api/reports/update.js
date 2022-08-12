import client from "../client";

export const updateReport = async (access_token, id, data) => {
  const endpoint = `/api/reports/:${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
