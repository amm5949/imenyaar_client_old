import client from "./client";

const endpoint = "/api/auth";

// export const loginToGetToken = async () => {
//   const response = await client.post(endpoint + "/login", {
//     phone_number: "9157150514",
//     password: "123123",
//   });
//   console.log("xxx", response)
//   return response.data;
// };

export const login = async (user) => {
  const response = await client.post(endpoint + "/login", {
    phone_number: user.phoneNumber,
    password: user.password,
  });
  return response;
};

export const register = (user) => {
  return client.post(endpoint + "/register", {
    phone_number: user.phoneNumber,
    password: user.password,
    first_name: user.firstname,
    last_name: user.lastname,
  });
};

export const activate = (user) => {
  return client.post(endpoint + "/activate", {
    phone_number: user.phoneNumber,
    code: user.code,
  });
};
