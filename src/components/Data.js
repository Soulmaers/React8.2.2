import React from "react";
import { useJsonFetch } from "./useJsonFetch";

export default function Data() {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/data");
    return (
        <>
            {data ? (
                <div className="data">Загрузка{data.status}</div>
            ) : null}
        </>
    );
}