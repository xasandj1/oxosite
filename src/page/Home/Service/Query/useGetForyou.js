import { useQuery } from "@tanstack/react-query"
import { Request } from "../../../../config/Request"

export const useGetForyou = () => {
    return (
        useQuery({
            queryKey: ["all"],
            queryFn: () => Request.get("/all").then((res) => res.data,
            )
        })
    )
}
