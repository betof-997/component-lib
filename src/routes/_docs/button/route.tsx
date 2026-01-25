import { Button } from '@/components/button';
import { Docs } from '@/components/docs';
import { createFileRoute } from '@tanstack/react-router';
import { PlusIcon, TrashIcon } from 'lucide-react';

export const Route = createFileRoute('/_docs/button')({
	component: ButtonPage,
});

function ButtonPage() {
	return (
		<>
			<Docs.Header>
				Button
			</Docs.Header>

			<Docs.Section title='Variants'>
				<Docs.Preview>
					<Button variant='primary'>Primary</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button variant='destructive'>Destructive</Button>
					<Button variant='link'>Link</Button>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Sizes'>
				<Docs.Preview>
					<Button size='xxs'>XXS</Button>
					<Button size='xs'>XS</Button>
					<Button size='sm'>SM</Button>
					<Button size='md'>MD</Button>
					<Button size='lg'>LG</Button>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Outlined'>
				<Docs.Preview>
					<Button isOutlined={true} variant='primary'>
						Primary
					</Button>
					<Button isOutlined={true} variant='secondary'>
						Secondary
					</Button>
					<Button isOutlined={true} variant='destructive'>
						Destructive
					</Button>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Ghost'>
				<Docs.Preview>
					<Button isGhost={true} variant='primary'>
						Primary
					</Button>
					<Button isGhost={true} variant='secondary'>
						Secondary
					</Button>
					<Button isGhost={true} variant='destructive'>
						Destructive
					</Button>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Rounded (Icon Buttons)'>
				<Docs.Preview>
					<Button isRounded={true} size='sm'>
						<PlusIcon />
					</Button>
					<Button isRounded={true} size='md'>
						<PlusIcon />
					</Button>
					<Button isRounded={true} size='lg'>
						<PlusIcon />
					</Button>
					<Button isRounded={true} isOutlined={true} size='md'>
						<TrashIcon />
					</Button>
					<Button
						isRounded={true}
						isGhost={true}
						variant='destructive'
						size='md'
					>
						<TrashIcon />
					</Button>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='With Icons'>
				<Docs.Preview>
					<Button>
						<PlusIcon /> Add Item
					</Button>
					<Button variant='destructive'>
						<TrashIcon /> Delete
					</Button>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Disabled'>
				<Docs.Preview>
					<Button disabled={true}>Disabled</Button>
					<Button disabled={true} isOutlined={true}>
						Disabled Outlined
					</Button>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { Button } from '@/components/button';

<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="destructive" isOutlined={true}>
  Delete
</Button>

<Button isRounded={true} size="md">
  <PlusIcon />
</Button>`}</Docs.Code>
			</Docs.Section>

			<Docs.Section title='Props'>
				<Docs.PropsTable
					props={[
						{
							name: 'variant',
							type: "'primary' | 'secondary' | 'destructive' | 'link'",
							default: "'primary'",
							description: 'The visual style of the button',
						},
						{
							name: 'size',
							type: "'xxs' | 'xs' | 'sm' | 'md' | 'lg'",
							default: "'md'",
							description: 'The size of the button',
						},
						{
							name: 'isOutlined',
							type: 'boolean',
							default: 'false',
							description: 'Renders the button with an outlined style',
						},
						{
							name: 'isGhost',
							type: 'boolean',
							default: 'false',
							description: 'Renders the button with a ghost style (no background)',
						},
						{
							name: 'isRounded',
							type: 'boolean',
							default: 'false',
							description: 'Renders the button as a circle (for icon buttons)',
						},
						{
							name: 'asChild',
							type: 'boolean',
							default: 'false',
							description: 'Renders the button as its child element (for composition)',
						},
						{
							name: 'disabled',
							type: 'boolean',
							default: 'false',
							description: 'Disables the button',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
