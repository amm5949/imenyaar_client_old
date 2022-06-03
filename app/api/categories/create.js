import client from "../client";


export const createCategory = async (id) => {
    const endpoint = `/api/categories/:${id}`;
    const response = await client.post(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}