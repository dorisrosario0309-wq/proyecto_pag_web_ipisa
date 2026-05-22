const express = require('express');
const router = express.Router();
const db = require('../db'); // Tu conexión a MySQL

// Ruta GET: Mostrar el formulario
router.get('/', (req, res) => {
    res.render('pages/login');
});

// Ruta POST: Procesar los datos
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);

        if (rows.length > 0) {
            const usuario = rows[0];
            
            // AQUÍ DEBES COMPARAR LA CONTRASEÑA
            // Si usas bcrypt: bcrypt.compare(password, usuario.password)
            if (password === usuario.password) { 
                res.send('Login exitoso, bienvenido ' + usuario.nombre);
            } else {
                res.send('Contraseña incorrecta');
            }
        } else {
            res.send('Usuario no encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;