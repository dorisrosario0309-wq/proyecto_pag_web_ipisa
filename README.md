# proyecto_pag_web_ipisa
Descripción del Proyecto: En este espacio vamos a añadir todo el contenido de nuestro proyecto con todas las tecnologias y librerias integradas.

Qué problema resuelve: La implementación de esta plataforma web optimiza la gestión del ciclo de vida del cliente mediante la centralización de recursos técnicos y operativos, lo cual mitiga la fricción postventa, reduce la tasa de incidencias por instalaciones inadecuadas y disminuye significativamente la carga administrativa en los canales de soporte técnico al habilitar un modelo de autoservicio eficiente. Esta arquitectura informativa no solo incrementa la autonomía del usuario final mediante el acceso democratizado a manuales de usuario y especificaciones técnicas estandarizadas, sino que también funge como un catalizador para la conversión de ventas al reducir la asimetría de información, consolidando así la fidelización mediante una experiencia de usuario técnica, profesional y desintermediada.

Tecnologías: Node.js & Express: Actúan como el back-end del sistema. Node.js proporciona un entorno de ejecución eficiente para JavaScript en el servidor, mientras que Express funciona como el framework web que gestiona las rutas, el enrutamiento de peticiones HTTP y la lógica de negocio, permitiendo una comunicación fluida entre el cliente y los datos.

Handlebars (HBS): Es el motor de plantillas encargado de la capa de presentación (view engine). Su función principal es dinamizar la generación de interfaces HTML, permitiendo reutilizar componentes (como los partials del footer o de las guías) para mantener la consistencia visual y reducir la redundancia de código.

Bootstrap 5: Constituye el framework de diseño CSS utilizado para la interfaz de usuario (front-end). Su propósito es asegurar un diseño responsivo y adaptable a múltiples dispositivos, aprovechando su sistema de grid para la correcta alineación de elementos y su amplia biblioteca de componentes estilizados.

JavaScript (Vanilla JS): Se emplea para implementar la capa de interactividad del lado del cliente, gestionando eventos, manipulación del DOM y comportamientos dinámicos que mejoran la respuesta del sitio ante las acciones del usuario.

Arquitectura MVC (Modelo-Vista-Controlador): La estructura del proyecto sigue este patrón de diseño para separar la lógica de datos (Modelos), la presentación visual (Vistas/HBS) y el flujo de control (Controladores/Rutas), lo cual facilita la escalabilidad del sistema a medida que se añaden nuevas funcionalidades o sucursales.

Versiones de Node.js, Express, etc.: Node.js	20.x o 22.x, Express	4.x, hbs	4.x, Bootstrap	5.3.x

Instalación: Pasos para clonar y ejecutar en local (npm install, npm start): Clonar el repositorio:
git clone <URL_DE_TU_REPOSITORIO>

Acceder al directorio:
cd nombre-de-tu-proyecto

Instalar las dependencias:
npm install

Iniciar el servidor:
npm start

Acceder a la aplicación:
Abre tu navegador y entra en http://localhost:3000 (o el puerto configurado en tu archivo app.js).

Variables de Entorno: 
# Configuración del servidor
PORT=3000
NODE_ENV=development

# Seguridad y sesiones
SESSION_SECRET=super_secreto_bellon_2026

# Configuración de servicios externos
GOOGLE_MAPS_API_KEY=AIzaSyD_... (tu clave real aquí)

# Base de datos
DB_HOST=localhost
DB_USER=admin_bellon
DB_PASS=tu_password_seguro

Ejemplo del archivo .env (sin las claves reales):
PORT=3000
DB_HOST=localhost
DB_USER=root
API_KEY=tu_clave_secreta_aqui

Capturas de Pantalla: Evidencia de la base de datos MySQL y la interfaz. 
