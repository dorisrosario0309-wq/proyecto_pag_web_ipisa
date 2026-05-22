require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');  

const db = require('./db'); 
const app = express();

// Importar las rutas
//const sucursalesRoutes = require('./routes/sucursales');
const login = require('./routes/login');
const index = require('./routes/index');

// Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
app.set('view options', { layout: 'layouts/main' })
hbs.registerPartials(path.join(__dirname, '../views/partials'));
// Helpers de handlebar
hbs.registerHelper('isActive', function(actual, esperado) {
    return actual === esperado ? 'active' : '';
});

app.use(express.static(path.join(__dirname, '../public')));
// Bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/fontawesome', express.static(path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')));


app.use((req, res, next) => {
    const pathName = req.path === '/' ? 'inicio' : req.path.replace('/', '');
    // Ejecutar cosas antes de cargar la pagina.

    res.locals.pagina = pathName; 
    next(); 
});

// Usar las rutas
app.use('/', index); 
app.use('/login', login);
// app.use('/sucursales', sucursalesRoutes);

app.listen(3000, () => console.log('Servidor listo en http://localhost:3000'));