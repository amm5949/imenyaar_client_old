import client from "../client";

export const createUser = async (access_token, data) => {

  const endpoint = `/api/users`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
