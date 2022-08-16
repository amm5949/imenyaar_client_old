import client from "../client";

export const createUser = async (access_token, user) => {
  const endpoint = `/api/users`;
  const response = await client.post(endpoint, user, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
