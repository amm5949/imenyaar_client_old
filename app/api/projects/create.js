import client from "../client";


export const addProject = async (id) => {
    const endpoint = `/api/projects/:${id}`;
    const response = await client.post(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}