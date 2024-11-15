import client from "../client";

export const deleteActivity = async (id, access_token) => {
  
  const endpoint = `/api/activities/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
