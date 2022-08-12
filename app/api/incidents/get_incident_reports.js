import client from "../client";

export const getIncidentReports = async (access_token, id) => {
  
  const endpoint = `/api/incidents/list/${id}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
