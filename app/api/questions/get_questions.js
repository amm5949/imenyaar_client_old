import client from "../client";

export const getQuestions = async (access_token) => {

  const endpoint = `/api/questions`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
