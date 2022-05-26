import client from "../client";


export const getQuestions = async (category_id) => {
    const endpoint = `/api/questions/order/:${category_id}`
    const response = await client.delete(endpoint, {
        headers: { Authorization: "Bearer " + access_token },
    })
    return response.data
}