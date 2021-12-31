import { loginToGetToken } from "./auth";
import client from "./client";
// why /:id is 3?
const endpoint = "/api/projects/3";

// fetch projects
export const getProject = async () => {
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.tokens.access_token;

    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    });
};
