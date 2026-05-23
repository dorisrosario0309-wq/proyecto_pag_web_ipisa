require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');  
const db = require('./db'); 
const app = express();

// Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
app.set('view options', { layout: 'layouts/main' });
hbs.registerPartials(path.join(__dirname, '../views/partials'));
// Helpers de handlebar
hbs.registerHelper('isActive', function(actual, esperado) {
    return actual === esperado ? 'active' : '';
});

// Registrar el helper para bloques
hbs.registerHelper('block', function(name, options) {
    if (!this._blocks) this._blocks = {};
    this._blocks[name] = options.fn(this);
    return null;
});
// Registrar el helper para mostrar el bloque
hbs.registerHelper('extend', function(name, context) {
    return (context._blocks && context._blocks[name]) ? context._blocks[name] : '';
});

app.use(express.static(path.join(__dirname, '../public')));
// Bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/fontawesome', express.static(path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')));

// Configuración Middleware
app.use((req, res, next) => {
    const pathName = req.path === '/' ? 'inicio' : req.path.replace('/', '');
    // Ejecutar cosas antes de cargar la pagina.

    res.locals.pagina = pathName; 
    next(); 
});

// Manejo de secciones con handlebars


// 
app.use(express.urlencoded({ extended: true }));

// Importar las rutas
//const sucursalesRoutes = require('./routes/sucursales');
const index = require('./routes/index');
const login = require('./routes/login');
const contacto = require('./routes/contacto');
const nosotros = require('./routes/nosotros');
const registrar = require('./routes/registrar');
const vip = require('./routes/vip');

app.use('/', index); 
app.use('/login', login);
app.use('/contacto', contacto); 
app.use('/nosotros', nosotros);
app.use('/registrar', registrar); 
app.use('/vip', vip);

app.listen(3000, () => console.log('Servidor listo en http://localhost:3000'));