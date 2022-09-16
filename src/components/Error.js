import { useJsonFetch } from './useJsonFetch'



export default function Error() {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/error");
    return (
        <>
            {error ? <div className="error">{error}</div> : null}
        </>
    );
}