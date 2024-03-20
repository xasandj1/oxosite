import { useQuery } from "@tanstack/react-query";
import { Request } from '../../../../config/Request';
export const useGetCategorys = () => {
    return (
        useQuery({
            queryKey: ["category"],
            queryFn: () => Request.get("/category").then((res) => res.data),

        })
    )
}
