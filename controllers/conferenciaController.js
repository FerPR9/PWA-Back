const Conferencia = require("../models/Conferencia");

// Crear una conferencia
exports.crearConferencia = async (req, res) => {
    try {
        let conferencia = new Conferencia(req.body);
        await conferencia.save();
        res.send(conferencia);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtener todas las conferencias
exports.obtenerConferencias = async (req, res) => {
    try {
        const conferencias = await Conferencia.find();
        res.json(conferencias);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Actualizar una conferencia
exports.actualizarConferencia = async (req, res) => {
    // Código similar a actualizarRegistro
}

// Obtener una conferencia por ID
exports.obtenerConferencia = async (req, res) => {
    // Código similar a obtenerRegistro
}

// Eliminar una conferencia
exports.eliminarConferencia = async (req, res) => {
    // Código similar a eliminarRegistro
}
