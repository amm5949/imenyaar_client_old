import client from "../client";

export const createQuestion = async (question) => {
    
  const endpoint = `/api/questions`;
  const response = await client.post(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
    question: question,
  });
  return response.data;
};
