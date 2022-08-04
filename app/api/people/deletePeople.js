import client from "./client";

export const deletePeople = async (token, user_id) => {
    const endpoint = `/api/users/:${user_id}`;
    const response = await client.delete(endpoint, {
        headers: { Authorization: "Bearer " + token },
    })
    return response.data
}
