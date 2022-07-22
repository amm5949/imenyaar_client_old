import client from "../client";


export const getActivity = async (id) => {
    const endpoint = `/api/activities/:${id}`;
    const response = await client.put(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}