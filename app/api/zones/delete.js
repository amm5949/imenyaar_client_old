import client from "../client";

export const deleteZone = async (accessToken, id) => {
  const endpoint = `/api/zones/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer " + accessToken },
  });
  return response.data;
};
