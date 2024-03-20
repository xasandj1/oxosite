import axios from 'axios';
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
    return useMutation({
        mutationKey: ["user-post"],
        mutationFn: async (data) => {
            const files = data.map(file => file.originFileObj);
            const formData = new FormData();
            files.forEach(file => {
                formData.append('files', file);
            });

            try {
                const response = await axios.post("http://localhost:8080/home", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': '$2a$10$qhQHk5NyTuiRC.0ZhBcA8.tmVd0iXouueUU.RLJWBj6sRGP3Omsvq' // Replace YOUR_TOKEN_HERE with your actual token
                    }
                });
                return response.data;
            } catch (error) {
                console.error("Error uploading files:", error);
                throw new Error("Failed to upload files");
            }
        },
    });
};