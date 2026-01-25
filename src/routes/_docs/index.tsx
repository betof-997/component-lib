import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/')({
	component: DocsHome,
});

function DocsHome() {
	return (
		<div>
			<h1>Docs Home</h1>
		</div>
	);
}
