import { loginToGetToken } from "./auth";
import client from "./client";
// why /:id is 3?
const endpoint = "/api/projects";

// fetch projects
export const getProject = async () => {
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.tokens.access_token;

    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    });
};

export const fetchProject = async() => {
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.access_token;
    // access_token.
    return client.get(endpoint + "/:3", {
        headers: { Authorization: "Bearer " + access_token},
    })
}