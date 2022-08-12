import client from "../client";

export const createReport = async (access_token, report) => {
  const endpoint = `/api/reports`;
  const response = await client.post(endpoint, report, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
