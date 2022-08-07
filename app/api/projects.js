import { loginToGetToken } from "./auth";
import client from "./client";
const endpoint = "/api/projects"

export const getProjects = async (access_token) => {
    // console.log('here => ', token)
    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
}

