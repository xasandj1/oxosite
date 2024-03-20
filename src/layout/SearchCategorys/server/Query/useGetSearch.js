import { useQuery } from "@tanstack/react-query"
import { Request } from "../../../../config/Request"

export const useGetForyou = (search = "") => {
    return (
        useQuery({
            queryKey: ["all", search],
            queryFn: () => Request.get("/all", { params: search ? { title_like: search } : undefined}).then((res) => res.data)
        })
    )
}
