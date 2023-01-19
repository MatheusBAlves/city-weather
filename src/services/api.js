const KEY = "56cd78a370bf42679b8184523231801";

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    
        const fetchRes = await fetch(url);
        if(fetchRes.status === 400){
            throw new Error();
        }
        return fetchRes.json();
};

export default fetchData;