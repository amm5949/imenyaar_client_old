import client from "../client";

export const removePeople = async (access_token, id) => {
  
  const endpoint = `/api/projects/addpeople/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
