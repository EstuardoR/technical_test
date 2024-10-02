# Proyecto Full Stack: Sistema con Autenticación y Páginas Protegidas

Este proyecto es una aplicación full stack que incluye un backend con NestJS y un frontend con Next.js. La aplicación permite el registro de usuarios, autenticación con JWT y manejo de páginas protegidas. Sin embargo, no se logró perfeccionar completamente la lógica de permisos del lado del backend.

## Instrucciones para ejecutar el proyecto

### 1. Backend

#### Instalación de dependencias

Para ejecutar el backend, asegúrate de seguir estos pasos:

1. Navega a la carpeta `backend` en el proyecto.
2. Instala las dependencias necesarias:

```bash
npm install
```

#### Configuración

Antes de ejecutar el backend, es necesario modificar las credenciales de la base de datos. Para ello, sigue estos pasos:

1. Abre el archivo `app.module.ts` que se encuentra en la carpeta `src`.
2. Cambia el `username` y el `password` de la base de datos con los valores correspondientes de tu entorno local.

Ejemplo:

```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base_de_datos',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
}),
```

#### Iniciar el servidor

Una vez configurado, puedes iniciar el backend con el siguiente comando:

```bash
npm run start:dev
```

### 2. Frontend

#### Instalación de dependencias

Para el frontend, sigue estos pasos:

1. Navega a la carpeta `frontend` en el proyecto.
2. Instala las dependencias necesarias:

```bash
npm install
```

#### Iniciar el servidor de desarrollo

Una vez que hayas instalado todas las dependencias, inicia el frontend con el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación a través de `http://localhost:3000`.

### 3. Gestión de permisos

Se intentó implementar la gestión de permisos para usuarios con diferentes roles (por ejemplo, usuarios y administradores). Sin embargo, **la lógica de permisos en el backend no se completó correctamente**, lo que puede impedir el acceso adecuado a las páginas protegidas por roles, como la página de administración.

### 4. Resumen de la solución de la prueba técnica

La prueba técnica pedía implementar un sistema completo con login y permisos. Se logró implementar lo siguiente:

- **Backend**: Autenticación con JWT, registro de usuarios, y manejo de entidades básicas como usuarios y permisos.
- **Frontend**: Interfaz con Next.js utilizando Material UI (MUI) para los componentes. Se implementaron páginas protegidas por roles y una lógica básica de navegación entre ellas.

Lo único que no se perfeccionó fue la correcta implementación de los permisos de administrador y usuario en el backend, por lo que dicha funcionalidad no está trabajando como se esperaba.

## Requerimientos previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- Node.js (versión 14 o superior)
- MySQL (o una base de datos compatible)
- NestJS CLI para ejecutar el backend (opcional)
- Next.js CLI para ejecutar el frontend (opcional)

## Autor

Desarrollado por [Joan Estuardo Rodas Ramírez]. Si tienes alguna duda o sugerencia, no dudes en contactarme.
