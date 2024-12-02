const Taller = require("../models/Taller");

// Crear un taller
exports.crearTaller = async (req, res) => {
    try {
        let taller = new Taller(req.body);
        await taller.save();
        res.send(taller);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtener todos los talleres
exports.obtenerTalleres = async (req, res) => {
    try {
        const talleres = await Taller.find();
        res.json(talleres);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Actualizar un taller
exports.actualizarTaller = async (req, res) => {
    // Código similar a actualizarRegistro
}

// Obtener un taller por ID
exports.obtenerTaller = async (req, res) => {
    // Código similar a obtenerRegistro
}

// Eliminar un taller
exports.eliminarTaller = async (req, res) => {
    // Código similar a eliminarRegistro
}
