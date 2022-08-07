import client from "../client";

export const updateProject = async (access_token, data, id) => {
  
  const endpoint = `/api/projects/${id}`;
  const response = await client.put(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
