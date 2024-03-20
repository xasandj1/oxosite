import { useQuery } from "@tanstack/react-query"
import { Request } from "../../../config/Request"


export const useGetWork = () => {
    return (
        useQuery({
            queryKey: ["work"],
            queryFn: () => Request.get("/work").then((res) => res.data)
        })
    )
}
