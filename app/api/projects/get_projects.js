import client from "../client";


export const getProjects = async (id) => {
    const endpoint = `/api/projects/`;
    const response = await client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}