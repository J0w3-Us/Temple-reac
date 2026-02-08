export const docsItems = [
  {
    id: 'overview',
    title: 'Overview',
    summary: 'Resumen rápido del propósito del proyecto y su arquitectura Onion.',
    content: 'Este proyecto sigue la arquitectura Onion. El frontend es Next.js y el backend Nest.js.\n\nFlujo típico: UI -> lib/hooks -> application -> domain -> infrastructure.'
  },
  {
    id: 'domain',
    title: 'Domain',
    summary: 'Entidades y reglas del dominio: Document, Slide, Element.',
    content: 'Entities: Document { id, title, slides }, Slide { id, order, elements }\n\nValueObjects: Dimension, Color, BoundingBox.'
  },
  {
    id: 'application',
    title: 'Application (Use-cases)',
    summary: 'Use-cases que orquestan la lógica de negocio (CreateDocument, AddSlide).',
    content: 'Use-case example: CreateDocument receives DTO, validates domain invariants, calls repository to persist.'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    summary: 'Adaptadores concretos: repositorios, storage y export services.',
    content: 'Implementaciones concretas deben vivir en src/infrastructure e implementar las interfaces definidas en Domain.'
  }
];
