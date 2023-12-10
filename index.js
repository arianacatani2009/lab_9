const expreso = requerir("expreso");
aplicación constante = expresar();
const PUERTO = proceso.env.PUERTO || 3000;

// Ruta GET para la información del grupo de trabajo
app.get('/grupo', (req, res) => {
    res.send('Información del grupo de trabajo');
});
// Ruta GET para la información de los integrantes del grupo
app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Ingrit ",
            "apellido": "Revelo",
            "carrera":"Desarrollo de software"
        },
        {
            "nombre":"Alan",
            "apellido": "Perez",
             "carrera":"Desarrollo de software"
        },
        {
            "nombre": "Nataly ",
            "apellido": "Casillas",
             "carrera":"Desarrollo de software"
        },
          {
            "nombre": "Dilan",
            "apellido": "Obando",
             "carrera":"Desarrollo de software"
        },
        {
            "nombre": "Cristhian ",
            "apellido": "Pañora",
             "carrera":"Desarrollo de software"
        },
        {
            "nombre": "Ariana",
            "apellido": "Catani",
             "carrera":"Desarrollo de software"
        },                  
    )},
    );
// Ruta GET para la presentación de productos
app.get('/productos', (req, res) => {
    res.send('Información de productos');
});
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
