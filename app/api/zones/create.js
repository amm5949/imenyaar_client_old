import client from "../client";


export const createZone = async (accessToken, data) => {
    console.log('hereeeee')
    const endpoint = `/api/zones`
    const response = await client.post(endpoint, data, {
        headers: { Authorization: "Bearer " + accessToken },
    })
    return response.data
}