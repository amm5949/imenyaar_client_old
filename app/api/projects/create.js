import client from "../client";

export const createProject = async (data, access_token) => {
    
  const endpoint = `/api/projects`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
