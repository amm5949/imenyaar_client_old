import client from "../client";

const endpoint = "/api/questions"

export const getQuestion = async (category_id) => {
    const endpoint = `/api/questions/order/:${category_id}`
    const response = await client.get(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}