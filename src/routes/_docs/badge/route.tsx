import { Badge } from '@/components/badge';
import { Docs } from '@/components/docs';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/badge')({
	component: BadgePage,
});

function BadgePage() {
	return (
		<>
			<Docs.Header description='Small status labels and contextual highlights.'>
				Badge
			</Docs.Header>

			<Docs.Section title='Variants'>
				<Docs.Preview>
					<Badge>Default</Badge>
					<Badge variant='secondary'>Secondary</Badge>
					<Badge variant='destructive'>Destructive</Badge>
					<Badge variant='outline'>Outline</Badge>
					<Badge variant='ghost'>Ghost</Badge>
					<Badge variant='link'>Link</Badge>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='As Child'>
				<Docs.Preview>
					<Badge asChild variant='default'>
						<a href='https://example.com'>As Anchor</a>
					</Badge>
					<Badge asChild variant='link'>
						<a href='https://example.com/docs'>Link Badge</a>
					</Badge>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { Badge } from '@/components/badge';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Danger</Badge>

<Badge asChild variant="link">
  <a href="https://example.com">Read more</a>
</Badge>`}</Docs.Code>
			</Docs.Section>

			<Docs.Section title='Props'>
				<Docs.PropsTable
					props={[
						{
							name: 'variant',
							type: "'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'",
							default: "'default'",
							description: 'Controls the visual style of the badge.',
						},
						{
							name: 'asChild',
							type: 'boolean',
							default: 'false',
							description: 'Renders the badge as its child element.',
						},
						{
							name: 'className',
							type: 'string',
							default: '-',
							description: 'Additional classes merged into the badge.',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
