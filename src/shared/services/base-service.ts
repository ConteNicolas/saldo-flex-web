import axios, { AxiosInstance } from "axios"


export class BaseService {
    protected api: AxiosInstance;

    public constructor(useToken: boolean = false) {
        this.api = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if (useToken) {
            this.api.interceptors.request.use(async (config) => {
                const token = sessionStorage.getItem('sf_token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });
        }
    }
}