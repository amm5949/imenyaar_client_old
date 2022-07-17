import client from "../client";


export const getIncident = async (incidentId) => {
    const endpoint = `/api/incidents/fetch/:${incidentId}`;
    const response = await client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}