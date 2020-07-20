import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


// Traemos los datos que necesitamos desde la API con axios

export const fetchData =  async (country) => {
    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate, };
    } catch  {
    }
}

// Traemos los datos diarios de la API con axios

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {

    }
}

//Traemos a todos los paises y mapeamos por cada pais, traer su nombre
export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
    
    }
}