import { useEffect, useState } from "react";

const controller = new AbortController();
const signal = controller.signal;

export const abortHandler = () => {
    controller.abort();
};

const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [usersAlbums, setUsersAlbums] = useState([]);
    const [usersPhotos, setUsersPhotos] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getResult = async (setter) => {
        const response = await fetch(url, { signal });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
            const result = await response.json();
            setter(result);
    }

    useEffect(() => {
        const getData = async () => {
            setError('');
            setIsLoading(true);

            try {
                if (url.includes('users')) {
                    await getResult(setUsers);
                }

                if (url.includes('albums')) {
                    await getResult(setUsersAlbums);
                }

                if (url.includes('photos')) {
                    await getResult(setUsersPhotos);
                }

            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, [url]);

    return [users, usersAlbums, usersPhotos, error, isLoading];

}

export default useFetch;
