import client from "../client";

export const addImage = async (id, image) => {
    
  const endpoint = `/api/questions/${id}/image`;
  const response = await client.post(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
    image: image,
  });
  return response.data;
};
