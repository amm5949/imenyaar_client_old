import { loginToGetToken } from "./auth";
import client from "./client";

const endpoint = "/api/incidents/list/3";

export const getAccidents = async () => {
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.tokens.access_token;

    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    });
};
