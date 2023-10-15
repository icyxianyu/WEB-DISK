import { fetchType } from "@/request"
import { useEffect, useState } from "react"

interface FetchProps<T> {
    fetchFn: fetchType<T>;  // 修改这里，传入泛型类型参数 T
    body?: Record<any, any>;
    params?: Record<any, any>;
}

export function useFetch<T>({ fetchFn, body, params }: FetchProps<T>) {
    const [data, setData] = useState<T | null>(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setIsPending(true);
            const res = await fetchFn({ body, params });
            const data = res.data;
            setData(data);
        }
        fetchData()
    }, [])

    return { data, isPending }
}