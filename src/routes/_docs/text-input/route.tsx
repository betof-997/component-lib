import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/text-input')({
	component: TextInputPage,
});

function TextInputPage() {
	return (
		<div>
			<h1>Text Input</h1>
		</div>
	);
}
