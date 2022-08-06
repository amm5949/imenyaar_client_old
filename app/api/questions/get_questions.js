import client from "../client";

export const getQuestions = async () => {

  const endpoint = `/api/questions`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
