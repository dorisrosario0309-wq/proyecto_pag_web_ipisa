# proyecto_pag_web_ipisa
Descripción del Proyecto: En este espacio vamos a añadir todo el contenido de nuestro proyecto con todas las tecnologias y librerias integradas.

Qué problema resuelve: La implementación de esta plataforma web optimiza la gestión del ciclo de vida del cliente mediante la centralización de recursos técnicos y operativos, lo cual mitiga la fricción postventa, reduce la tasa de incidencias por instalaciones inadecuadas y disminuye significativamente la carga administrativa en los canales de soporte técnico al habilitar un modelo de autoservicio eficiente. Esta arquitectura informativa no solo incrementa la autonomía del usuario final mediante el acceso democratizado a manuales de usuario y especificaciones técnicas estandarizadas, sino que también funge como un catalizador para la conversión de ventas al reducir la asimetría de información, consolidando así la fidelización mediante una experiencia de usuario técnica, profesional y desintermediada.

Tecnologías: Node.js & Express: Actúan como el back-end del sistema. Node.js proporciona un entorno de ejecución eficiente para JavaScript en el servidor, mientras que Express funciona como el framework web que gestiona las rutas, el enrutamiento de peticiones HTTP y la lógica de negocio, permitiendo una comunicación fluida entre el cliente y los datos.

Handlebars (HBS): Es el motor de plantillas encargado de la capa de presentación (view engine). Su función principal es dinamizar la generación de interfaces HTML, permitiendo reutilizar componentes (como los partials del footer o de las guías) para mantener la consistencia visual y reducir la redundancia de código.

Bootstrap 5: Constituye el framework de diseño CSS utilizado para la interfaz de usuario (front-end). Su propósito es asegurar un diseño responsivo y adaptable a múltiples dispositivos, aprovechando su sistema de grid para la correcta alineación de elementos y su amplia biblioteca de componentes estilizados.

JavaScript (Vanilla JS): Se emplea para implementar la capa de interactividad del lado del cliente, gestionando eventos, manipulación del DOM y comportamientos dinámicos que mejoran la respuesta del sitio ante las acciones del usuario.

Arquitectura MVC (Modelo-Vista-Controlador): La estructura del proyecto sigue este patrón de diseño para separar la lógica de datos (Modelos), la presentación visual (Vistas/HBS) y el flujo de control (Controladores/Rutas), lo cual facilita la escalabilidad del sistema a medida que se añaden nuevas funcionalidades o sucursales.

Versiones de Node.js, Express, etc.: 
<img width="281" height="393" alt="image" src="https://github.com/user-attachments/assets/bccce0fc-0ea9-4dec-8677-3a609e7c48d2" />

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

Interfaz
<img width="842" height="477" alt="image" src="https://github.com/user-attachments/assets/35be174a-11b1-40ae-a19e-f5ba8ae7c827" />
<img width="846" height="480" alt="image" src="https://github.com/user-attachments/assets/fd304fe4-9aab-483e-bb38-06b96ecd2118" />
<img width="280" height="527" alt="image" src="https://github.com/user-attachments/assets/6ef12450-7ca8-4cd7-9452-88c8dec7bf44" />
<img width="266" height="416" alt="image" src="https://github.com/user-attachments/assets/add4631d-904b-4de2-b9ba-8e7da4e48d8a" />
<img width="272" height="407" alt="image" src="https://github.com/user-attachments/assets/ebecc174-f1ca-4041-a7d9-f47a18e58f4f" />
<img width="267" height="401" alt="image" src="https://github.com/user-attachments/assets/3aeeca20-48b3-4cad-b684-9cfad28d5db8" />
<img width="268" height="417" alt="image" src="https://github.com/user-attachments/assets/a552a323-c527-4681-a498-868b145aa606" />
<img width="272" height="428" alt="image" src="https://github.com/user-attachments/assets/0067f28e-587c-44d3-95c4-9eaae44d4a46" />
<img width="271" height="430" alt="image" src="https://github.com/user-attachments/assets/9b3e9504-c5f6-4bc8-98dc-df98bb8d0ec4" />
<img width="266" height="446" alt="image" src="https://github.com/user-attachments/assets/2edae1c5-25b6-4a47-996a-ca4157655cdb" />
<img width="263" height="450" alt="image" src="https://github.com/user-attachments/assets/2417309a-1355-4544-b7aa-4ab18b6e9b94" />
<img width="263" height="433" alt="image" src="https://github.com/user-attachments/assets/39b18bce-1bcf-4cd1-a552-f5de75f14fb3" />
<img width="267" height="425" alt="image" src="https://github.com/user-attachments/assets/ea3e6605-22e5-44d5-855f-0c3817f21d07" />
<img width="266" height="433" alt="image" src="https://github.com/user-attachments/assets/e35f4096-b008-4b1a-8371-c1baccbca1a1" />
<img width="267" height="453" alt="image" src="https://github.com/user-attachments/assets/b25109ff-8754-4ea9-9b50-8e9bb59622cf" />
<img width="278" height="442" alt="image" src="https://github.com/user-attachments/assets/7606041b-214a-4443-8656-36fffe3d4fdd" />
<img width="265" height="457" alt="image" src="https://github.com/user-attachments/assets/2fc0962f-996b-4220-8a72-67eaa2755586" />
<img width="265" height="421" alt="image" src="https://github.com/user-attachments/assets/ca513078-c308-4095-8f46-28e17d35c3be" />
<img width="292" height="547" alt="image" src="https://github.com/user-attachments/assets/6640d499-1f69-4a22-9d99-20f0480837f6" />

Evidencia de la base de datos MySQL: La base de datos se desarrollo en MYSQL y se tomaron capturas de pantalla de evidencia.
<img width="923" height="838" alt="image" src="https://github.com/user-attachments/assets/180357d0-1de8-4f15-83ed-d35418493d8c" />
<img width="913" height="978" alt="image" src="https://github.com/user-attachments/assets/29680a98-8c3d-4197-b291-cfce81cc2dcd" />
<img width="915" height="751" alt="image" src="https://github.com/user-attachments/assets/5f77593a-d75e-458c-af19-9ecfe5cd7b8c" />
<img width="890" height="996" alt="image" src="https://github.com/user-attachments/assets/9b926aef-d9a1-4c8f-a922-b3a034673052" />
<img width="916" height="946" alt="image" src="https://github.com/user-attachments/assets/57601194-42db-4f7a-b621-0a8ff9e38ab3" />
<img width="928" height="206" alt="image" src="https://github.com/user-attachments/assets/cb137324-53e7-4197-9fdb-b598c20bb07c" />















