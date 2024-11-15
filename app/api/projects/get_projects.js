import client from "../client";

export const getProjects = async (access_token) => {

  const endpoint = `/api/projects`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
