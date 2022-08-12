import client from "../client";

export const fetchPeople = async (access_token, id) => {
  
  const endpoint = `/api/projects/people/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
