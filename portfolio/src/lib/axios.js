import axios from "axios";

const instance = axios.create({
    baseURL: 'https://portfolio-5helo4h80-toko122s-projects.vercel.app/api'
})

export default instance