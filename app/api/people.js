import client from "./client";

const endpoint = "/api/users";

export const getPeople = async (access_token) => {
    // console.log('here => ', token)
    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
}