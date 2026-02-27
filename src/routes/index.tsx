import { createFileRoute, redirect } from '@tanstack/react-router';
import { Button } from '@/components/button';
import { authClient } from '@/lib/authClient';
import { getSession } from '@/lib/authServer';

export const Route = createFileRoute('/')({
	beforeLoad: async () => {
		const session = await getSession();

		if (session) {
			throw redirect({ to: '/dashboard' });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const handleGoogleSignIn = async () => {
		await authClient.signIn.social({
			provider: 'google',
			callbackURL: '/dashboard',
		});
	};

	return (
		<main className='flex min-h-screen items-center justify-center'>
			<Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
		</main>
	);
}
