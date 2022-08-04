import client from "../client";


export const removePeople = async (id, access_token) => {
    const endpoint = `/api/projects/people/:${id}`;
    const response = await client.delete(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}