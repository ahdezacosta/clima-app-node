const lugar = require('./lugar/lugar');
const tiempo = require('./tiempo/tiempo');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

const getTemp = async(direccion) => {
    try {
        let _lugar = await lugar.getLugarLatLng(argv.direccion);
        let _temp = await tiempo.getTiempo(_lugar.lat, _lugar.lng);

        return `La temperatura en ${ _lugar.direccion } es de ${_temp.data.main.temp} grados celsius`;
    } catch (error) {
        throw new Error(`No se puedo determinar la temperatura en ${ direccion }`);
    }
}

getTemp(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });