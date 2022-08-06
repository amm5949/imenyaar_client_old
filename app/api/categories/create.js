import client from "../client";

export const createCategory = async () => {

  const endpoint = `/api/categories`;
  const response = await client.post(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
