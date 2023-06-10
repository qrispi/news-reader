import 'dotenv/config'

const getTopStories = async() => {
    const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us',
        {
			method: 'GET',
			headers: {
				'X-Api-Key': `${process.env.API_KEY}`,
			}
		}
    );
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response
}

export default getTopStories