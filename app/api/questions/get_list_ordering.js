import client from "../client";

export const getListOrdering = async (access_token, id) => {

  const endpoint = `/api/questions/order/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
