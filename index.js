const express = require('express');
const app = express();

// Ruta GET para la información del grupo de trabajo
app.get('/grupo', (req, res) => {
    res.send('Información del grupo de trabajo');
});

// Ruta GET para la información de los integrantes del grupo
app.get('/integrantes', (req, res) => {
    res.send('Información de los integrantes del grupo');
});

// Ruta GET para la presentación de productos
app.get('/productos', (req, res) => {
    res.send('Información de productos');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
