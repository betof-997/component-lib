import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/form')({
	component: FormPage,
});

function FormPage() {
	return (
		<div>
			<h1>Form</h1>
		</div>
	);
}
