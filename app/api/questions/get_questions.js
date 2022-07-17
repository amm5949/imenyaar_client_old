import client from "../client";

const endpoint = "/api/questions"

export const getQuestions = async () => {
    const response = await client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}