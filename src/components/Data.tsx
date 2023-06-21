import UseJsonFetch from "../useJsonFetch"

export default function Data({url}:{url:string}) {
        const [{ data: data, loading, error }] = UseJsonFetch(url, []);
        return (
            <>
                {loading && <p>Loading...</p>}
                <div>
                    {data ? <p>Data: {data.status}</p> : null}
                    {error ? <p>Ошибка!</p>  : null }
                </div>
            </>
        );
    }