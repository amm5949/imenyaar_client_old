import client from "../client";

export const createActivity = async () => {
    
  const endpoint = `/api/activities`;
  const response = await client.post(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
