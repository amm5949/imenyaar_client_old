import client from "../client";


export const updateZone = async (accessToken, id, data) => {
    console.log('hereeeee')
    const endpoint = `/api/zones/${id}`
    const response = await client.put(endpoint, data, {
        headers: { Authorization: "Bearer " + accessToken },
    })
    return response.data
}