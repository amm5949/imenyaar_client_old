import client from "../client";

export const getActivities = async (access_token) => {
    
  const endpoint = `/api/activities`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
