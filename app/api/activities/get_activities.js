import client from "../client";

const endpoint = "/api/activities"

export const getActivities = async () => {
    const response = await client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}