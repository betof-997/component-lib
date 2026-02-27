import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/button';
import { authClient } from '@/lib/authClient';
import { ensureSession } from '@/lib/authServer';

export const Route = createFileRoute('/_authenticated/dashboard/')({
	beforeLoad: async () => {
		const session = await ensureSession();
		return { session };
	},
	component: DashboardPage,
});

function DashboardPage() {
	const { session } = Route.useRouteContext();

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					window.location.href = '/';
				},
			},
		});
	};

	return (
		<main className='mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-2 p-8'>
			<h1 className='text-2xl font-semibold'>Dashboard</h1>

			<p>Welcome, {session.user.name ?? session.user.email}.</p>
			<p className='text-muted-foreground'>{session.user.email}</p>
			<div className='mt-4'>
				<Button onClick={handleLogout}>Logout</Button>
			</div>
		</main>
	);
}
