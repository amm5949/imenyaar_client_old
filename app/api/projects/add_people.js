import client from "../client";

export const addPeople = async (access_token, data, id) => {
  
  const endpoint = `/api/projects/people/${id}`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
