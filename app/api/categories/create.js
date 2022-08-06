import client from "../client";

export const createCategory = async (access_token, data) => {

  const endpoint = `/api/categories`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
