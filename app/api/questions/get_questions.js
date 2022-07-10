import client from "../client";

const endpoint = "/api/questions"

export const getQuestions = async () => {
    const response = await client.post(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}