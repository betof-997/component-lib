import { Docs } from '@/components/docs';
import { Select } from '@/components/select';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/select')({
	component: SelectPage,
});

const fruits = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'mango', label: 'Mango' },
];

const timezones = [
	{
		value: 'North America',
		items: [
			{ value: 'est', label: 'Eastern Standard Time (EST)' },
			{ value: 'cst', label: 'Central Standard Time (CST)' },
			{ value: 'pst', label: 'Pacific Standard Time (PST)' },
		],
	},
	{
		value: 'Europe',
		items: [
			{ value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
			{ value: 'cet', label: 'Central European Time (CET)' },
		],
	},
] as const;

type TimezoneGroup = (typeof timezones)[number];
type TimezoneItem = TimezoneGroup['items'][number];

function SelectPage() {
	return (
		<>
			<Docs.Header>Select</Docs.Header>

			<Docs.Section title='Basic'>
				<Docs.Preview>
					<Select.Root items={fruits}>
						<Select.Input placeholder='Search fruits...' />
						<Select.Content>
							<Select.Empty>No results found</Select.Empty>
							<Select.List>
								{(item: (typeof fruits)[number]) => (
									<Select.Item
										key={item.value}
										value={item.value}
									>
										{item.label}
									</Select.Item>
								)}
							</Select.List>
						</Select.Content>
					</Select.Root>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='With Groups and Labels'>
				<Docs.Preview>
					<Select.Root items={timezones}>
						<Select.Input placeholder='Search timezones...' />
						<Select.Content>
							<Select.Empty>No results found</Select.Empty>
							<Select.List>
								{(group: TimezoneGroup, index: number) => (
									<Select.Group
										key={group.value}
										items={group.items}
									>
										<Select.Label>{group.value}</Select.Label>
										<Select.Collection>
											{(item: TimezoneItem) => (
												<Select.Item
													key={item.value}
													value={item.value}
												>
													{item.label}
												</Select.Item>
											)}
										</Select.Collection>
										{index < timezones.length - 1 && <Select.Separator />}
									</Select.Group>
								)}
							</Select.List>
						</Select.Content>
					</Select.Root>
				</Docs.Preview>
			</Docs.Section>
		</>
	);
}
