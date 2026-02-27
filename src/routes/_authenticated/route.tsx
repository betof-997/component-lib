import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import { getSession } from '@/lib/authServer';

export const Route = createFileRoute('/_authenticated')({
	beforeLoad: async () => {
		const session = await getSession();

		if (!session) {
			throw redirect({ to: '/' });
		}

		return { user: session.user };
	},
	component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
	return <Outlet />;
}
