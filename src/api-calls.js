import data from "./mock-data"

const getTopStories = async() => {
    const promise1 = new Promise((resolve, reject) => {
        resolve(data);
    });
    return promise1
    // try {
    //     const response = await fetch(
    //         'https://newsapi.org/v2/top-headlines?country=us',
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'X-Api-Key': `${process.env.REACT_APP_API_KEY}`,
    //             }
    //         }
    //     );
    //     return await response.json();
    // } catch (error) {
    //     return error.message;
    // }
}

const getSearchStories = async(keywords) => {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${keywords}&sortBy=popularity&pageSize=30`,
            {
                method: 'GET',
                headers: {
                    'X-Api-Key': `${process.env.REACT_APP_API_KEY}`,
                }
            }
        );
        return await response.json();
    } catch (error) {
        return error.message;
    }
}

export default { getTopStories, getSearchStories };