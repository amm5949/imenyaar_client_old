import client from "../client";


export const deleteProject = async (id) => {
    const endpoint = `/api/projects/people/:${id}`;
    const response = await client.post(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}