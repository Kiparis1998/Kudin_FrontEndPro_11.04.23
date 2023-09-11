import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [usersAlbums, setUsersAlbums] = useState([]);
    const [usersPhotos, setUsersPhotos] = useState([]);
    const [error, setError] = useState('');

    const getResult = async (setter) => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
            const result = await response.json();
            setter(result);
        }

    useEffect(() => {
        const getData = async () => {
            setError('');

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
            }
        };

        getData();
    }, [url]);

    return [users, usersAlbums, usersPhotos, error];

}

export default useFetch;
