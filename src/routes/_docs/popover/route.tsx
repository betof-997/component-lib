import { Button } from '@/components/button';
import { Docs } from '@/components/docs';
import { Popover } from '@/components/popover';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/popover')({
	component: PopoverPage,
});

function PopoverPage() {
	return (
		<>
			<Docs.Header description='Floating content anchored to a trigger.'>
				Popover
			</Docs.Header>

			<Docs.Section title='Basic'>
				<Docs.Preview>
					<Popover.Root>
						<Popover.Trigger asChild>
							<Button>Open Popover</Button>
						</Popover.Trigger>
						<Popover.Content>
							<Popover.Header>
								<Popover.Title>Popover Title</Popover.Title>
								<Popover.Description>
									This is a simple popover using the default alignment and offset.
								</Popover.Description>
							</Popover.Header>
						</Popover.Content>
					</Popover.Root>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Custom Alignment'>
				<Docs.Preview>
					<Popover.Root>
						<Popover.Trigger asChild>
							<Button variant='secondary'>Align Start</Button>
						</Popover.Trigger>
						<Popover.Content align='start'>
							<Popover.Header>
								<Popover.Title>Start Aligned</Popover.Title>
								<Popover.Description>
									Content can be aligned to start, center, or end.
								</Popover.Description>
							</Popover.Header>
						</Popover.Content>
					</Popover.Root>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { Button } from '@/components/button';
import { Popover } from '@/components/popover';

<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Open</Button>
  </Popover.Trigger>
  <Popover.Content align="center" sideOffset={4}>
    <Popover.Header>
      <Popover.Title>Popover Title</Popover.Title>
      <Popover.Description>
        Helpful description for this popover.
      </Popover.Description>
    </Popover.Header>
  </Popover.Content>
</Popover.Root>`}</Docs.Code>
			</Docs.Section>

			<Docs.Section title='Props'>
				<Docs.PropsTable
					props={[
						{
							name: 'Popover.Trigger asChild',
							type: 'boolean',
							default: 'false',
							description: 'Renders the trigger as its child element.',
						},
						{
							name: 'Popover.Content align',
							type: "'start' | 'center' | 'end'",
							default: "'center'",
							description: 'Horizontal alignment of the floating content.',
						},
						{
							name: 'Popover.Content sideOffset',
							type: 'number',
							default: '4',
							description: 'Distance in pixels between anchor and content.',
						},
						{
							name: 'Popover.Content side',
							type: "'top' | 'right' | 'bottom' | 'left'",
							default: "'bottom' (Radix default)",
							description: 'Preferred side where content should appear.',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
