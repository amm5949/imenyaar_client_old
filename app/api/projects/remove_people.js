import client from "../client";

export const removePeople = async (id) => {
  const endpoint = `/api/projects/addpeople/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
