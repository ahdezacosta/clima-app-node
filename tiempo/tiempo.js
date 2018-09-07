const axios = require('axios');


const getTiempo = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ba1017d50e390843b30cdd702b2ab81f`);

    if (resp.cod === '400') {
        throw new Error(resp.message);
    }
    return resp;
}

module.exports = { getTiempo }