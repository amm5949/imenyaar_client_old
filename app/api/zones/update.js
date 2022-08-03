import client from "../client";


export const updateZone = async (accessToken, id, data) => {
    console.log('hereeeee')
    const endpoint = `/api/zones/${id}`
    const response = await client.put(endpoint, {
        headers: { Authorization: "Bearer " + accessToken },
        body: { ...data }
    })
    return response.data
}