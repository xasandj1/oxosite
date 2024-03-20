import axios from "axios";
import { loadState, saveState } from "../lib/storage";

const Request = axios.create({ baseURL: import.meta.env.VITE_APP_URL });

const PostData = (config) => {
    setTimeout(() => {
        if (
            config.url !== "/login" &&
            config.url !== "/register" &&
            config.method == "post"
        ) {
            axios
                .post("http://localhost:8080/all", JSON.parse(config.data))
                .then((res) => res.data);
        }
    }, 500);

    return;
};
Request.interceptors.request.use(
    (config) => {
        const token = loadState("user");
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token?.accessToken}`,
        };
        PostData(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Request.interceptors.response.use(
    (response) => {
        if (response.status === 401) {
            return (window.location.pathname = "/");
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export { Request };