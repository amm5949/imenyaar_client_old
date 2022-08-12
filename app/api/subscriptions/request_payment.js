import client from "../client";

export const requestPayment = async (access_token, id, data) => {
    
  const endpoint = `/api/subscription/buy/${id}`;
  const response = await client.post(endpoint, data, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
