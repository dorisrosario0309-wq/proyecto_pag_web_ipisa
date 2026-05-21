const db = require('./src/db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    console.log('Conexión exitosa, resultado:', rows[0].solution);
  } catch (error) {
    console.error('Error al conectar a la BD:', error.message);
  }
}

testConnection();