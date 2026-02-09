import DocsLayout from '../components/ui/DocsLayout';
// Button removed to avoid passing event handlers from server components  
import Hero from '../components/ui/Hero';
import DocsClientPanel from '../components/ui/DocsClientPanel';

export default function Home() {
	return (
		<DocsLayout>
			<Hero />

			<DocsClientPanel />
		</DocsLayout>
	);
}

