import client from "../client";

export const addImage = async (id, data, access_token) => {
  
  const endpoint = `/api/questions/${id}/image`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
