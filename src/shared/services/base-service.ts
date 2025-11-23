import axios, { AxiosInstance } from "axios"


export class BaseService {
    protected api: AxiosInstance;

    public constructor(useToken: boolean = false) {
        this.api = axios.create({
            baseURL: `${process.env.API_BASE_URL}/api`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if (useToken) {
            this.api.interceptors.request.use(async (config) => {
                const token = localStorage.getItem('sfjt');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });
        }
    }
}