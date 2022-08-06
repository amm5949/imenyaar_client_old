import client from "../client";

export const updateActivity = async (id, access_token, data) => {
    
  const endpoint = `/api/activities/${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
