import client from "../client";

export const updateQuestion = async (access_token, data, id) => {
  
  const endpoint = `/api/questions/${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
