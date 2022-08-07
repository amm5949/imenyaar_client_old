import client from "../client";

export const verifyPayment = async (access_token, id) => {
    
  const endpoint = `/api/subscription/verify/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer" + access_token },
  });
  return response.data;
};
