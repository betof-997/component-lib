import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import { useQuery, } from '@tanstack/react-query';
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { tanstackQueryDevtoolsConfig } from '../components/tanstack-query';
import appCss from '../styles.css?url';
import { createServerFn } from '@tanstack/react-start';
import { db } from '@/db/client';
import { userTable } from '@/db/tables';

export type AppRouterContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<AppRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: '@betof-997/boilerplate',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
		],
	}),
	notFoundComponent: () => <div>Not Found</div>,
	errorComponent: () => <div>Error</div>,
	shellComponent: RootDocument,
});

const getUsersServerFn = createServerFn().handler(async () => {
	return await db.select().from(userTable);
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { data: users } = useQuery({
		queryKey: ['users'],
		queryFn: () => getUsersServerFn(),
	});

	// biome-ignore lint/suspicious/noConsole: <explanation>1
	console.log('users', users);

	return (
		<html lang='en'>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}

				<TanStackDevtools
					config={{
						position: 'bottom-right',
					}}
					plugins={[
						{
							name: 'Tanstack Router',
							render: <TanStackRouterDevtoolsPanel />,
						},
						tanstackQueryDevtoolsConfig,
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
