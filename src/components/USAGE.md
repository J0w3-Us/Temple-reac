Componentes UI — Guía rápida

Resumen

- Todos los componentes UI están en `src/components/ui/` y están pensados para ser minimalistas, accesibles y fáciles de componer.

Componentes incluidos

- `Button.tsx`: botón primario con transiciones suaves, `focus-visible` y `active` scale. Usa la prop `className` para variantes.
- `Card.tsx`: tarjeta enfocable con `role="group"`, efecto de elevación y `focus-within` ring.
- `DocsLayout.tsx`: layout para páginas de documentación con una navegación lateral accesible.
- `Hero.tsx` / `Illustration.tsx`: sección hero con ilustración SVG.
- `SearchBar.tsx`: input accesible con `aria-label`.
- `ComponentList.tsx`: lista navegable por teclado (ArrowUp/Down, Enter) y focus styles.
- `ComponentDetail.tsx`: panel de detalles con `aria-live="polite"` para anunciar cambios.
- `CodeSnippet.tsx`: muestra bloques de código con `role="region"`.

Cómo añadir un nuevo componente UI

1. Crea un archivo en `src/components/ui/`, exporta un componente por defecto.
2. Mantén clases de Tailwind consistentes con el diseño (transitions, focus-visible, text colors).
3. Añade pruebas de accesibilidad manuales: navegar con Tab/Shift+Tab, usar Arrow keys donde aplique, y comprobar cambios anunciados por lectores de pantalla.

Cómo añadir un nuevo documento de especificación

1. Edita `src/lib/docsData.ts` y añade un objeto con `id`, `title`, `summary`, `content`.
2. El panel de documentación utiliza `docsItems` para listar y mostrar detalle.

Buenas prácticas de accesibilidad implementadas

- `focus-visible` rings en controles interactivos.
- `aria-live` en regiones que cambian dinámicamente.
- Navegación por teclado en listas interactivas.
- Roles semánticos (`navigation`, `region`, `list`).

Próximos pasos

- Pegar la paleta de colores que definas en `src/app/globals.css` usando variables CSS (ej. `--color-bg`, `--color-accent`).
- Si quieres, preparo variantes temáticas (light/dark) y tokens para tipografía.
