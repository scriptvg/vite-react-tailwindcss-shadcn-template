
# Vite + React + Tailwind + Shadcn UI — Starter

Proyecto de ejemplo que combina Vite (v6), React (v18), Tailwind CSS y componentes de Shadcn UI. El archivo principal de la demo es `src/App.jsx`.

## Qué incluye este repo

- Plantilla con Vite + React.
- Tailwind CSS y clases utilitarias en JSX.
- Componentes shadcn en `src/components/ui` (importados con el alias `@/*`).
- Iconos: `react-icons`, `lucide-react`.
- Assets: `vite.svg`, `react.svg`.

## Requisitos

- Node.js (>=16) y npm o yarn
- Windows (comandos en ejemplos para PowerShell / CMD)

## Instalación

Desde la raíz del proyecto:

- Con npm:
  npm install
- Con yarn:
  yarn

## Ejecutar en modo desarrollo

- npm:
  npm run dev
- yarn:
  yarn dev

Abre el URL que muestre Vite (por defecto http://localhost:5173).

## Construir para producción

- npm:
  npm run build
- Previsualizar build:
  npm run preview

## Notas importantes

- El proyecto usa el alias de importación definido en `jsconfig.json`:
  "@/..." -> "src/...". Si VS Code no resuelve imports, asegúrate de que `jsconfig.json` esté presente y reinicia el servidor de TypeScript.
- Si ves advertencias del estilo "File ... @types/react/index.d.ts not found" (TypeScript/VS Code) en un proyecto JS, puedes instalarlas como dependencias de desarrollo:
  npm install --save-dev @types/react @types/react-dom
  Esto solo añade tipos para el editor y no convierte el proyecto a TypeScript.
- Asegúrate de tener instaladas las dependencias usadas en `src/App.jsx`:
  - react, react-dom
  - lucide-react
  - react-icons
  - las dependencias de Shadcn UI que tu plantilla requiera

## Personalizar

- Edita `src/App.jsx` para probar HMR (Hot Module Replacement).
- Cambia o añade componentes en `src/components/ui`.
- Ajusta Tailwind en `tailwind.config.cjs` / `tailwind.config.js` según tu configuración.

## Solución de problemas rápidos

- Reiniciar TS server en VS Code: abre paleta de comandos → "TypeScript: Restart TS Server".
- Forzar uso de TypeScript del workspace: paleta → "TypeScript: Select TypeScript Version" → "Use workspace version".
- Si faltan estilos, verifica que la hoja de estilos de Tailwind esté importada en `main.jsx` / `index.css`.

---

Plantilla mínima lista para empezar a desarrollar componentes UI con Tailwind y Shadcn.// filepath: c:\Users\velez\OneDrive\Desktop\tailwindcss-shadcn-cheatsheet\README.md

# Vite + React + Tailwind + Shadcn UI — Starter

Proyecto de ejemplo que combina Vite (v6), React (v18), Tailwind CSS y componentes de Shadcn UI. El archivo principal de la demo es `src/App.jsx`.

## Qué incluye este repo

- Plantilla con Vite + React.
- Tailwind CSS y clases utilitarias en JSX.
- Componentes shadcn en `src/components/ui` (importados con el alias `@/*`).
- Iconos: `react-icons`, `lucide-react`.
- Assets: `vite.svg`, `react.svg`.

## Requisitos

- Node.js (>=16) y npm o yarn
- Windows (comandos en ejemplos para PowerShell / CMD)

## Instalación

Desde la raíz del proyecto:

- Con npm:
  npm install
- Con yarn:
  yarn

## Ejecutar en modo desarrollo

- npm:
  npm run dev
- yarn:
  yarn dev

Abre el URL que muestre Vite (por defecto http://localhost:5173).

## Construir para producción

- npm:
  npm run build
- Previsualizar build:
  npm run preview

## Notas importantes

- El proyecto usa el alias de importación definido en `jsconfig.json`:
  "@/..." -> "src/...". Si VS Code no resuelve imports, asegúrate de que `jsconfig.json` esté presente y reinicia el servidor de TypeScript.
- Si ves advertencias del estilo "File ... @types/react/index.d.ts not found" (TypeScript/VS Code) en un proyecto JS, puedes instalarlas como dependencias de desarrollo:
  npm install --save-dev @types/react @types/react-dom
  Esto solo añade tipos para el editor y no convierte el proyecto a TypeScript.
- Asegúrate de tener instaladas las dependencias usadas en `src/App.jsx`:
  - react, react-dom
  - lucide-react
  - react-icons
  - las dependencias de Shadcn UI que tu plantilla requiera

## Personalizar

- Edita `src/App.jsx` para probar HMR (Hot Module Replacement).
- Cambia o añade componentes en `src/components/ui`.
- Ajusta Tailwind en `tailwind.config.cjs` / `tailwind.config.js` según tu configuración.

## Solución de problemas rápidos

- Reiniciar TS server en VS Code: abre paleta de comandos → "TypeScript: Restart TS Server".
- Forzar uso de TypeScript del workspace: paleta → "TypeScript: Select TypeScript Version" → "Use workspace version".
- Si faltan estilos, verifica que la hoja de estilos de Tailwind esté importada en `main.jsx` / `index.css`.

---

Plantilla mínima lista para empezar a desarrollar componentes UI con Tailwind y Shadcn.
