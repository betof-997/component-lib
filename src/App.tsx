import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Button } from './components/button';
import { Sidebar } from './components/sidebar';
import { TextInput } from './components/text-input';
import { cn } from './lib/utils';
import { Form } from './components/form';
import { useAppForm } from './hooks/use-app-form';
import { SubmitButton } from './components/submit-button/SubmitButton';
import z from 'zod';

type ComponentSectionProps = PropsWithChildren<{
	title: string;
	singleColumn?: boolean;
}>;
const ComponentSection = ({
	title,
	children,
	singleColumn = false,
}: ComponentSectionProps) => {
	return (
		<section className='space-y-4'>
			<h2 className='text-lg font-semibold text-foreground'>{title}</h2>
			<div
				className={cn(
					'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4',
					singleColumn ? 'grid-cols-1' : '',
				)}
			>
				{children}
			</div>
		</section>
	);
};

type VariantCardProps = PropsWithChildren<{
	label: string;
	fullWidth?: boolean;
}>;
const VariantCard = ({
	label,
	children,
	fullWidth = false,
}: VariantCardProps) => {
	return (
		<div className='flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 w-full'>
			<span className='text-xs text-muted-foreground'>{label}</span>
			<div
				className={cn(
					'flex h-full items-center gap-2',
					fullWidth ? 'w-full' : '',
				)}
			>
				<div className='in-[.show-occupying-space]:bg-foreground/10 w-full'>
					{children}
				</div>
			</div>
		</div>
	);
};

export const App = () => {
	const [showOccupyingSpace, setShowOccupyingSpace] = useState(false);
	const form = useAppForm({
		defaultValues: {
			name: '',
		},
		validators: {
			onChange: z.object({
				name: z.string().min(1),
			}),
		},
		onSubmit: ({ value }) => {
			alert(JSON.stringify(value));
		},
	});

	return (
		<Sidebar.Root>
			<Sidebar.Panel collapsible='offcanvas'>
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupLabel>Components</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>Button</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>Form</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>TextInput</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
			</Sidebar.Panel>

			<main
				className={cn(
					'min-h-screen bg-background p-8 flex-1',
					showOccupyingSpace ? 'show-occupying-space' : '',
				)}
			>
				<div className='mx-auto max-w-3xl space-y-12'>
					<header className='space-y-2 flex items-center gap-4'>
						<Sidebar.Trigger />
						<div>
							<h1 className='text-2xl font-bold text-foreground'>
								@betof-997/component-lib
							</h1>
							<p className='text-muted-foreground'>
								A collection of reusable components
							</p>
						</div>
					</header>

					<div className='flex items-center gap-2'>
						<Button onClick={() => setShowOccupyingSpace(!showOccupyingSpace)}>
							{showOccupyingSpace
								? 'Hide occupying space'
								: 'Show occupying space'}
						</Button>
					</div>

					<div className='space-y-12'>
						<ComponentSection
							title='Form'
							singleColumn={true}
						>
							<VariantCard
								label='default'
								fullWidth={true}
							>
								<Form.Root form={form}>
									<Form.Group>
										<form.AppField
											name='name'
											children={(field) => <field.TextInput label='Name' />}
										/>
									</Form.Group>

									<SubmitButton>Submit</SubmitButton>
								</Form.Root>
							</VariantCard>
						</ComponentSection>

						<ComponentSection title='TextInput'>
							<VariantCard label='default'>
								<TextInput name='text-input' />
							</VariantCard>
							<VariantCard label='with label'>
								<TextInput
									name='text-input'
									label='Text Input'
									description='This is a text input'
								/>
							</VariantCard>
							<VariantCard label='with description'>
								<TextInput
									name='text-input'
									label='Text Input'
									description='This is a text input'
								/>
							</VariantCard>
							<VariantCard label='with label, description and errors'>
								<TextInput
									name='text-input'
									label='Text Input'
									description='This is a text input'
									errors={['This is an error']}
									showErrors
								/>
							</VariantCard>
						</ComponentSection>

						<ComponentSection title='Button - Variants'>
							<VariantCard label='primary (default)'>
								<Button>Primary</Button>
							</VariantCard>
							<VariantCard label='secondary'>
								<Button variant='secondary'>Secondary</Button>
							</VariantCard>
							<VariantCard label='destructive'>
								<Button variant='destructive'>Destructive</Button>
							</VariantCard>
							<VariantCard label='link'>
								<Button variant='link'>Link</Button>
							</VariantCard>
						</ComponentSection>

						<ComponentSection title='Button - Sizes'>
							<VariantCard label='xxs'>
								<Button size='xxs'>XXS</Button>
							</VariantCard>
							<VariantCard label='xs'>
								<Button size='xs'>XS</Button>
							</VariantCard>
							<VariantCard label='sm'>
								<Button size='sm'>Small</Button>
							</VariantCard>
							<VariantCard label='md (default)'>
								<Button size='md'>Medium</Button>
							</VariantCard>
							<VariantCard label='lg'>
								<Button size='lg'>Large</Button>
							</VariantCard>
						</ComponentSection>

						<ComponentSection title='Button - Outlined'>
							<VariantCard label='primary outlined'>
								<Button isOutlined>Primary</Button>
							</VariantCard>
							<VariantCard label='secondary outlined'>
								<Button
									variant='secondary'
									isOutlined
								>
									Secondary
								</Button>
							</VariantCard>
							<VariantCard label='destructive outlined'>
								<Button
									variant='destructive'
									isOutlined
								>
									Destructive
								</Button>
							</VariantCard>
						</ComponentSection>

						<ComponentSection title='Button - Ghost'>
							<VariantCard label='primary ghost'>
								<Button isGhost>Primary</Button>
							</VariantCard>
							<VariantCard label='secondary ghost'>
								<Button
									variant='secondary'
									isGhost
								>
									Secondary
								</Button>
							</VariantCard>
							<VariantCard label='destructive ghost'>
								<Button
									variant='destructive'
									isGhost
								>
									Destructive
								</Button>
							</VariantCard>
						</ComponentSection>

						<ComponentSection title='Button - Rounded'>
							<VariantCard label='xxs rounded'>
								<Button
									size='xxs'
									isRounded
								>
									A
								</Button>
							</VariantCard>
							<VariantCard label='xs rounded'>
								<Button
									size='xs'
									isRounded
								>
									A
								</Button>
							</VariantCard>
							<VariantCard label='sm rounded'>
								<Button
									size='sm'
									isRounded
								>
									A
								</Button>
							</VariantCard>
							<VariantCard label='md rounded'>
								<Button
									size='md'
									isRounded
								>
									A
								</Button>
							</VariantCard>
							<VariantCard label='lg rounded'>
								<Button
									size='lg'
									isRounded
								>
									A
								</Button>
							</VariantCard>
							<VariantCard label='rounded + outlined'>
								<Button
									size='md'
									isRounded
									isOutlined
								>
									A
								</Button>
							</VariantCard>
						</ComponentSection>
					</div>
				</div>
			</main>
		</Sidebar.Root>
	);
};
