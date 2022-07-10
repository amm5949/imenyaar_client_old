import { loginToGetToken } from "./auth";
import client from "./client";
// why /:id is 3?
const endpoint = "/api/projects";

// fetch projects
// export const getProject = async () => {
//     const loginResponse = await loginToGetToken();
//     const access_token = loginResponse.result.tokens.access_token;
//     console.log("Hi before get in getProject");
//     return client.get(endpoint, {
//         headers: { Authorization: "Bearer " + access_token },
//     });
// };

export const getProjectWithQueryStrings = async ( admixtures ) => {
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.tokens.access_token;
    console.log("Hi before get in getProject");
    return client.get(endpoint + "/" + admixtures, {
        headers: { Authorization: "Bearer " + access_token },
    });
};

export const fetchProject = async( id ) => {
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.tokens.access_token;
    // access_token.
    console.log("Hi before get in fetchProject");
    return client.get( endpoint + "/" + id.toString() , {
        headers: { Authorization: "Bearer " + access_token},
    })
};

export const fetchPeopleProject = async( id ) => {
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.tokens.access_token;
    // access_token.
    console.log("Hi before get in fetchPeopleProject");
    return client.get( endpoint + "/people" + "/" + id.toString() , {
        headers: { Authorization: "Bearer " + access_token},
    })
};
// const endpoint = "/api/projects"

export const getProjects = async () =>{ 
    const loginResponse = await loginToGetToken();
    const access_token = loginResponse.result.tokens.access_token;
    return client.get(endpoint, { 
        headers: { Authorization: "Bearer " + access_token },
     })
 }
