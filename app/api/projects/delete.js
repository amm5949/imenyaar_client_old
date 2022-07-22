import client from "../client";


export const deleteProject = async (id) => {
    const endpoint = `/api/projects/:${id}`;
    const response = await client.delete(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}