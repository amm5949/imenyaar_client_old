import { loginToGetToken } from "./auth";
import client from "./client";
let endpoint = "/api/projects"

export const getProjects = async (token) => {
    // console.log('here => ', token)
    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + token },
    })
}

