import { Sidebar } from '@/components/sidebar';
import { Link, Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs')({
	component: DocsLayout,
});

const NAV_ITEMS = [
	{
		label: 'Getting Started',
		items: [{ label: 'Introduction', href: '/' }],
	},
	{
		label: 'Components',
		items: [
			{ label: 'Button', href: '/button' },
			{ label: 'Form', href: '/form' },
			{ label: 'Text Input', href: '/text-input' },
			{ label: 'Select Input', href: '/select-input' },
			{ label: 'Select', href: '/select' },
		],
	},
];

function DocsLayout() {
	return (
		<Sidebar.Root>
			<Sidebar.Panel>
				<div className='flex h-14 items-center border-b px-4'>
					<Link
						to='/'
						className='flex items-center gap-2 font-semibold'
					>
						<span className='text-primary text-lg'>
							@betof-997/component-lib
						</span>
					</Link>
				</div>

				<Sidebar.Content>
					{NAV_ITEMS.map((group) => (
						<Sidebar.Group key={group.label}>
							<Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
							<Sidebar.GroupContent>
								<Sidebar.Menu>
									{group.items.map((item) => (
										<Sidebar.MenuItem key={item.href}>
											<Sidebar.MenuButton asChild>
												<Link
													to={item.href}
													activeProps={{
														'data-active': true,
													}}
												>
													{item.label}
												</Link>
											</Sidebar.MenuButton>
										</Sidebar.MenuItem>
									))}
								</Sidebar.Menu>
							</Sidebar.GroupContent>
						</Sidebar.Group>
					))}
				</Sidebar.Content>
			</Sidebar.Panel>

			<main className='flex-1 overflow-auto'>
				<div className='flex items-center gap-2 border-b h-14 px-4'>
					<Sidebar.Trigger />
					<span className='text-primary font-semibold'>
						@betof-997/component-lib
					</span>
				</div>

				<div className='max-w-4xl mx-auto space-y-8 p-6 md:p-10'>
					<Outlet />
				</div>
			</main>
		</Sidebar.Root>
	);
}
