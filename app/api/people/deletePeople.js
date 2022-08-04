import client from "../client";

export const deletePeople = async ( user_id, token) => {
    const endpoint = `/api/users/:${user_id}`;
    const response = await client.delete(endpoint, {
        headers: { Authorization: "Bearer " + token },
    })
    return response.data
}
