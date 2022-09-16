import { useJsonFetch } from './useJsonFetch'


export default function Loading() {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");
    return (
        <>
            {loading ? <progress /> : null}
        </>
    );
}