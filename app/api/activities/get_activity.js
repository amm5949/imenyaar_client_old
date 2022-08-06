import client from "../client";

export const getActivity = async (id, access_token) => {
    
  const endpoint = `/api/activities/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
