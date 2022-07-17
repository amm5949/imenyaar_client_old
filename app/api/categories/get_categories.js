import client from "../client";


export const getCategories = async () => {
    const endpoint = `/api/categories/`;
    const response = await client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}