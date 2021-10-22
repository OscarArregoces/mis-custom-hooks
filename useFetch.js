import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        return () => {
            isMounted.current = false;
            console.log( 'El componente no se llamo.')
        }
    }, [])

    useEffect(() => {

        setstate({ data: null, loading: true })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })

    }, [url])


    return state;
}
