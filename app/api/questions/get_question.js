import client from "../client";

export const getQuestion = async (access_token, id) => {
    
  const endpoint = `/api/questions/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
