import client from "../client";

export const updateQuestion = async (id) => {
  const endpoint = `/api/questions/${id}`;
  const response = await client.put(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
