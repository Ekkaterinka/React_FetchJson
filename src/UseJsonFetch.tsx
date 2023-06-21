import { useState, useEffect } from "react";

export default function UseJsonFetch(url: any, Data:any) {
    const [data, setData] = useState(Data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Ошибка сети");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData()
    }, []);

    return [{ data, loading, error }];}