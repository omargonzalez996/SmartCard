
export async function getData(user) {
    let uuid;
    const data_url = import.meta.env.VITE_DATA_URL

    const uuids = {
        1: import.meta.env.VITE_DATA_UUID_1,
        2: import.meta.env.VITE_DATA_UUID_2
    }

    if (!user in uuids) {
        return { message: "unknown user" }
    } else {
        uuid = uuids[user]
    }

    const fetchData = async (uuid) => {
        try {
            const response = await fetch(`${data_url}${uuid}`, {
                method: 'GET',
                headers: {
                    'x-zarbyte-smartcardapi': import.meta.env.VITE_API_TOKEN
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);

            return result
        } catch (error) {
            console.log(error);
            return { message: "error fetching data", error }
        }
    }

    fetchData(uuid);
}