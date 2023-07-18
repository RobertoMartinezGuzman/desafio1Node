
const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const dato = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    dato.push({nombre: nombre, edad: edad, animal: animal, color: color, enfermedad : enfermedad})
    fs.writeFileSync('citas.json', JSON.stringify(dato))
    console.log('Se han registrado correctamente los datos')
}

const leer = () => {

    const historial = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    historial.forEach((cita) => {
        console.log(`Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
      });
}

module.exports = {registrar, leer};


