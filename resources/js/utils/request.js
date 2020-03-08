import axios from 'axios'

// create an axios instance

const service = axios.create({
	baseURL: process.config.BASE_API,
	timeout: 30000 // request timeout
})

export default service
