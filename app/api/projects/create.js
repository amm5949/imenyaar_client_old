import client from "../client";

export const createProject = async (project, access_token) => {
    
  const endpoint = `/api/projects`;
  const response = await client.post(endpoint, project, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
