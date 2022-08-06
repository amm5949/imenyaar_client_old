import client from "../client";

export const createQuestion = async (data, access_token) => {
    
  const endpoint = `/api/questions`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
