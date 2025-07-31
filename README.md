# API PsicoAxioma

API REST para el sistema PsicoAxioma desarrollada con Node.js y Express.

## Configuración del proyecto

### Prerequisitos

- Node.js (versión 14 o superior)
- Base de datos MySQL
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/amlune/APIPsicoAxioma.git
cd APIPsicoAxioma
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
   - Copia el archivo `.env.example` a `.env`
   - Actualiza las variables de entorno con tus credenciales

```bash
cp .env.example .env
```

4. Edita el archivo `.env` con tu configuración:
```env
PORT=8000
DB_HOST=tu-host-de-base-de-datos
DB_PORT=3306
DB_USER=tu-usuario-de-base-de-datos
DB_PASSWORD=tu-contraseña-de-base-de-datos
DB_NAME=nombre-de-tu-base-de-datos
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

5. Ejecuta la aplicación:
```bash
npm start
```

### Scripts disponibles

- `npm start`: Ejecuta la aplicación en modo producción
- `npm test`: Ejecuta las pruebas con Mocha

### Estructura del proyecto

```
├── config/             # Configuración de rutas y controladores
├── db/                 # Configuración de base de datos
├── test/               # Archivos de pruebas
├── index.js            # Punto de entrada de la aplicación
├── package.json        # Dependencias y scripts
└── psicoaxioma.sql     # Script de base de datos
```

## API Endpoints

La API estará disponible en `http://localhost:8000/api`

### Rutas principales

- `GET /`: Página de bienvenida
- `GET /api`: Confirmación de API funcionando
- `POST /api/...`: Endpoints específicos de la aplicación
