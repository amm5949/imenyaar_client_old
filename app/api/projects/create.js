import client from "../client";


export const addProject = async (project, access_token) => {
    const endpoint = `/api/projects`;
    const response = await client.post(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}