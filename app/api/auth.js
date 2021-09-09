import client from "./client";

const endpoint = "/api/auth";

export const login = async () => {
  const response = await client.post(endpoint + "/login", {
    phone_number: "9157150514",
    password: "123123",
  });
  // console.log(response.data);
  return response.data;
};
