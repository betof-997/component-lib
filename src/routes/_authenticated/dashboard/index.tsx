import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/dashboard/')({
	component: DashboardPage,
});

function DashboardPage() {
	return (
		<main className='mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-2 p-8'>
			<h1 className='text-2xl font-semibold'>Dashboard</h1>
		</main>
	);
}
