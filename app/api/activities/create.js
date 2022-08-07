import client from "../client";

export const createActivity = async (access_token, data) => {
  
  const endpoint = `/api/activities`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
