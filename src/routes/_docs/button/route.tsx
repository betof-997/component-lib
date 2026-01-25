import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/button')({
	component: ButtonPage,
});

function ButtonPage() {
	return (
		<div>
			<h1>Button</h1>
		</div>
	);
}
