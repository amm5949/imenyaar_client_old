import client from "../client";

export const getListOrdering = async (category_id) => {
  const endpoint = `/api/questions/order/${category_id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
