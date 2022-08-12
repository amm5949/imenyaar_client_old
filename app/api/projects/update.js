import client from "../client";

export const updateProject = async (id) => {
  const endpoint = `/api/projects/${id}`;
  const response = await client.put(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
