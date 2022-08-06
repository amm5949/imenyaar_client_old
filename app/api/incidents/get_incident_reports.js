import client from "../client";

export const getIncidentReports = async (projectId) => {

  const endpoint = `/api/incidents/list/${projectId}`;
  const response = await client.get(endpoint, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return response.data;
};
