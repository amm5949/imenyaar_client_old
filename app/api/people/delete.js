import client from "../client";

export const deleteUser = async (access_token, data, id) => {
  const endpoint = `/api/projects/addpeople/${id}`;
  const response = await client.delete(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
