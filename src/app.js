require('dotenv').config();
const express = require('express');
const db = require('./db'); // Importa tu conexión
const app = express();

// Configurar Handlebars
app.set('view engine', 'hbs');
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));



// Ruta principal
app.get('/', async (req, res) => {
  try {
    // 1. Consultar a la BD
    const [rows] = await db.query('SELECT 1 + 1 AS Total;');
    
    // 2. Renderizar la vista enviando los datos obtenidos
    res.render('index', { result: rows });
  } catch (error) {
    res.status(500).send('Error al obtener datos: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});