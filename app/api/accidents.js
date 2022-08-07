import { loginToGetToken } from "./auth";
import client from "./client";

const endpoint = "/api/incidents";

export const getAccidents = async (access_token) => {
    // console.log('here => ', token)
    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
}
