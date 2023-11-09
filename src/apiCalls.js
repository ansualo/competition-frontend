import axios from "axios";

// const URL = "http://localhost:8000/api"

const URL = "https://competition-backend.vercel.app/api/api"

export const registerParticipant = async (participant) => {

    return await axios.post(`${URL}/register`, participant)
}