// The keyword 'use' must be used to indicate it is a custom hook

import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('use effect ran');
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    console.log(err.message);
                    setError(err.message)
                })
                .finally(() => setIsPending(false))
        }, 1000);
    }, [url]); // whenever url is changes, it will rerun this function to get the endpoint

    // return value/properties
    return { data, isPending, error };
}

export default useFetch;