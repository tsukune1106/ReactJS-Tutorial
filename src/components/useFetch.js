// The keyword 'use' must be used to indicate it is a custom hook

import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    let errorName = null;

    useEffect(() => {
        console.log('use effect ran');

        // used for cleanup / stop the fetch
        const abortCtrl = new AbortController();

        setTimeout(() => {
            // useEffect Hook Part 1: Mounting -> when a component is initially rendered when user lands on the page.

            // fetch(url)
            fetch(url, { signal: abortCtrl.signal }) // include AbortSignal
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
                    console.log('useFetch error: ', { name: err.name, message: err.message });
                    errorName = err.name;
                    if (err.name !== 'AbortError') {
                        setError(err.message);
                    }
                    else {
                        console.log('fetch aborted');
                    }
                })
                .finally(() => {
                    if (errorName !== 'AbortError') {
                        setIsPending(false);
                    }
                })
        }, 1000);

        // useEffect Hook Part 2: Cleanup function -> when the user leaves the page and the component will unmount
        // whenever useEffect is fired, return is invoked
        // abort() is used to stop the fetch which is associated with abortCtrl
        return () => abortCtrl.abort();

    }, [url]);
    // [url]:
    // useEffect Hook Part 3: Updating -> where you put the states that will update throughout the component's lifecycle
    // whenever url is changes, it will rerun this function to get the endpoint

    // return value/properties
    return { data, isPending, error };
}

export default useFetch;