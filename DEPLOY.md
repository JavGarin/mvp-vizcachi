# Guía de Despliegue (Vizcachi MVP)

Esta aplicación está construida con **React + Vite**. A continuación se detallan los pasos para desplegarla en las plataformas más comunes.

## Prerrequisitos
- Node.js (v18 o superior recomendado)
- Cuenta en GitHub, GitLab o Bitbucket

## Comandos de Build
El script para construir la aplicación para producción es:
```bash
npm run build
```
Esto generará una carpeta `dist` con los archivos estáticos listos para servir.

---

## Opción 1: Vercel (Recomendada)
1.  Sube tu código a un repositorio (GitHub/GitLab).
2.  Inicia sesión en [Vercel](https://vercel.com).
3.  Haz clic en **"Add New..."** -> **"Project"**.
4.  Importa tu repositorio de `vizcachi-mvp`.
5.  Vercel detectará automáticamente que es un proyecto Vite.
    - **Build Command:** `npm run build`
    - **Output Directory:** `dist`
    - **Install Command:** `npm install`
6.  Haz clic en **"Deploy"**.

**Nota:** Se ha incluido un archivo `vercel.json` en la raíz del proyecto para asegurar que las rutas de la aplicación (SPA) funcionen correctamente al recargar la página.

---

## Opción 2: Netlify
1.  Sube tu código a un repositorio.
2.  Inicia sesión en [Netlify](https://netlify.com).
3.  Haz clic en **"Add new site"** -> **"Import an existing project"**.
4.  Conecta tu proveedor Git y selecciona el repositorio.
5.  Configura el despliegue:
    - **Build command:** `npm run build`
    - **Publish directory:** `dist`
6.  Haz clic en **"Deploy site"**.

**Nota:** Se ha incluido un archivo `_redirects` en la carpeta `public` para gestionar las redirecciones de la Single Page Application (SPA), evitando errores 404 en rutas internas.

---

## Verificación Post-Despliegue
Una vez desplegado, verifica:
1.  Navegar a `/demo` y recargar la página (no debe dar error 404).
2.  Verificar que el banner de "Aviso Legal" aparece abajo.
3.  Probar el flujo de registro simulado y el mapa.
