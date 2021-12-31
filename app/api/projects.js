import { loginToGetToken } from "./auth";
import client from "./client";

const endpoint = "/api/projects";

export const getProject = async ( project ) => {
    const loginResponse = await client.get(endpoint + "/login", {
        id: project.id,
        name: project.name,
        owner_id: project.owner_id,
        start_date: project.start_date,
        scheduled_end: project.project,
        address: project.address,
        area: project.area,
        is_multizoned: project.is_multizoned,
    })
    const access_token = loginResponse.result.tokens.access_token;

    return client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    });
};
