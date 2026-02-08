import DocsLayout from '../components/ui/DocsLayout';
// Button removed to avoid passing event handlers from server components
import { Card, CardTitle, CardDescription } from '../components/ui/Card';
import Hero from '../components/ui/Hero';
import DocsClientPanel from '../components/ui/DocsClientPanel';

export default function Home() {
	return (
		<DocsLayout>
			<Hero />

			<header id="docs" className="rounded-md bg-white/3 p-8">
				<div className="flex items-start justify-between gap-6">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">Arquitectura del proyecto — Onion</h1>
						<p className="mt-2 text-zinc-300 max-w-2xl">
							Plantilla minimalista para documentar el proyecto. Frontend 100% en React
							(Next.js App Router). Backend separado en Nest.js. A continuación se
							describen las carpetas principales y responsabilidades.
						</p>
					</div>

					<div className="hidden items-center gap-4 sm:flex">
						<a href="/create" className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500">Crear nueva aplicación</a>
					</div>
				</div>
			</header>

			<section className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-4">
				<Card>
					<CardTitle>Domain</CardTitle>
					<div className="mt-4">
						<img src="/assets/domain.png" alt="domain" className="w-full rounded-md border bg-black/10" />
						<CardDescription>
							Entidades y Value Objects puros (ej. <code>Document</code>, <code>Slide</code>), reglas e invariantes.
						</CardDescription>
					</div>
				</Card>

				<Card>
					<CardTitle>Application</CardTitle>
					<div className="mt-4">
						<img src="/assets/application.png" alt="application" className="w-full rounded-md border bg-black/10" />
						<CardDescription>
							Casos de uso que orquestan la lógica de negocio (ej. <code>CreateDocument</code>).
						</CardDescription>
					</div>
				</Card>

				<Card>
					<CardTitle>Infrastructure</CardTitle>
					<div className="mt-4">
						<img src="/assets/infrastructure.png" alt="infrastructure" className="w-full rounded-md border bg-black/10" />
						<CardDescription>
							Implementaciones concretas de repositorios y servicios (Supabase, Storage).
						</CardDescription>
					</div>
				</Card>

				<Card>
					<CardTitle>Components / Lib</CardTitle>
					<div className="mt-4">
						<img src="/assets/components.png" alt="components" className="w-full rounded-md border bg-black/10" />
						<CardDescription>
							Componentes UI y hooks que adaptan la UI a los casos de uso.
						</CardDescription>
					</div>
				</Card>
			</section>

			<section className="mt-6 rounded-md bg-white/2 p-6">
				<h2 className="text-lg font-semibold">Notas rápidas</h2>
				<ul className="mt-3 list-disc pl-6 text-zinc-300">
					<li>UI: Next.js + React — App Router, server/edge components según convenga.</li>
					<li>Backend: Nest.js, separado y consumido por la capa Infrastructure.</li>
					<li>Flujo típico: UI → `lib/hooks` → `application` → `domain` → `infrastructure`.</li>
				</ul>
			</section>

			<DocsClientPanel />
		</DocsLayout>
	);
}

