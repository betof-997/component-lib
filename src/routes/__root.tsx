import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { getRootRouteHead } from './-lib/getRootRouteHead';
import { tanstackQueryDevtoolsConfig } from '../components/tanstack-query';

export type AppRouterContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<AppRouterContext>()({
	head: () => getRootRouteHead(),
	notFoundComponent: () => <div>Not Found</div>,
	errorComponent: () => <div>Error</div>,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
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
