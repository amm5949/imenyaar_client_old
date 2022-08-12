import client from "../client";

export const updatePeople = async (access_token, id, data) => {
  const endpoint = `/api/users/:${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
