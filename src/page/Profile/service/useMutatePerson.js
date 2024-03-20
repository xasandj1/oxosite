import { useMutation } from "@tanstack/react-query";
import { Request } from "../../../config/Request";
import { saveState } from "../../../lib/storage";

export const useMutatePerson = () => {
    return useMutation({
        mutationKey: ["mutate"],
        mutationFn: (data) => Request.post("/register", data).then((res) => {
            const { accessToken } = res.data;
            saveState('token', accessToken);
            const { name, email } = data; // Destructure name and email from data
            saveState('userInfo', { name, email })
            return res.data;
        }),
    });
};