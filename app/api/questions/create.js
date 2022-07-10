import client from "../client";

const endpoint = "/api/questions"

export const createQuestion = async (question) => {
    const response = await client.post(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
        question: question
    })
    return response.data
}