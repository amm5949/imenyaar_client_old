import client from "../client";

export const getProject = async (id) => {
  const endpoint = `/api/projects/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
