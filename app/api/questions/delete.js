import client from "../client";

export const deleteQuestion = async (id) => {
  const endpoint = `/api/questions/${id}`;
  const response = await client.delete(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
