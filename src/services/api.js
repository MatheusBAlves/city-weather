const KEY = "5749a10228a448efbfc143756231801";

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    
        const fetchRes = await fetch(url);
        if(fetchRes.status === 400){
            throw new Error();
        }
        return fetchRes.json();
};

export default fetchData;