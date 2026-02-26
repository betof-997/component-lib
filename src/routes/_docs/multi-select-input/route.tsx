import { Docs } from '@/components/docs';
import { MultiSelectInput } from '@/components/multi-select-input';
import { createFileRoute } from '@tanstack/react-router';
import { SearchIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/_docs/multi-select-input')({
	component: MultiSelectInputPage,
});

const fruits = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'mango', label: 'Mango', disabled: true },
];

const timezones = [
	{
		heading: 'North America',
		options: [
			{ value: 'est', label: 'Eastern Standard Time (EST)' },
			{ value: 'cst', label: 'Central Standard Time (CST)' },
			{ value: 'pst', label: 'Pacific Standard Time (PST)' },
		],
	},
	{
		heading: 'Europe',
		options: [
			{ value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
			{ value: 'cet', label: 'Central European Time (CET)' },
		],
	},
];

function MultiSelectInputPage() {
	const [selectedFruits, setSelectedFruits] = useState<string[]>(['apple']);
	const [selectedTimezones, setSelectedTimezones] = useState<string[]>([
		'est',
		'gmt',
	]);
	const [requiredSelection, setRequiredSelection] = useState<string[]>(['banana']);
	const [compactSelection, setCompactSelection] = useState<string[]>([
		'apple',
		'banana',
		'orange',
	]);
	const [closeOnSelectSelection, setCloseOnSelectSelection] = useState<string[]>([]);
	const handleSelectedFruitsChange = (nextValues: string[] | undefined) => {
		setSelectedFruits(nextValues ?? []);
	};
	const handleSelectedTimezonesChange = (nextValues: string[] | undefined) => {
		setSelectedTimezones(nextValues ?? []);
	};
	const handleRequiredSelectionChange = (nextValues: string[] | undefined) => {
		setRequiredSelection(nextValues ?? []);
	};
	const handleCompactSelectionChange = (nextValues: string[] | undefined) => {
		setCompactSelection(nextValues ?? []);
	};
	const handleCloseOnSelectSelectionChange = (
		nextValues: string[] | undefined,
	) => {
		setCloseOnSelectSelection(nextValues ?? []);
	};

	return (
		<>
			<Docs.Header>Multi Select Input</Docs.Header>

			<Docs.Section title='Basic'>
				<Docs.Preview>
					<MultiSelectInput
						label='Favorite Fruits'
						description='Select one or many options.'
						placeholder='Select fruits...'
						options={fruits}
						value={selectedFruits}
						onChange={handleSelectedFruitsChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Grouped Options'>
				<Docs.Preview>
					<MultiSelectInput
						label='Timezones'
						description='Options can be grouped with headings.'
						options={timezones}
						value={selectedTimezones}
						onChange={handleSelectedTimezonesChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='States'>
				<Docs.Preview>
					<MultiSelectInput
						label='Required'
						required={true}
						options={fruits}
						value={requiredSelection}
						onChange={handleRequiredSelectionChange}
					/>
					<MultiSelectInput
						label='With Error'
						placeholder='Pick at least one option'
						options={fruits}
						value={[]}
						errors={['Please select at least one option']}
						showErrors={true}
					/>
					<MultiSelectInput
						label='Disabled'
						disabled={true}
						options={fruits}
						value={['apple', 'orange']}
					/>
					<MultiSelectInput
						label='Read Only'
						readOnly={true}
						options={fruits}
						value={['banana']}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Behavior Toggles'>
				<Docs.Preview>
					<MultiSelectInput
						label='No Search / No Select All'
						searchable={false}
						hideSelectAll={true}
						options={fruits}
						value={compactSelection}
						onChange={handleCompactSelectionChange}
					/>
					<MultiSelectInput
						label='Max Count + Close on Select'
						description='Shows up to 2 badges and closes after each selection.'
						maxCount={2}
						closeOnSelect={true}
						options={fruits}
						value={closeOnSelectSelection}
						onChange={handleCloseOnSelectSelectionChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='With Input Buttons'>
				<Docs.Preview>
					<MultiSelectInput
						label='Tagged Fruits'
						placeholder='Select with quick actions...'
						options={fruits}
						value={selectedFruits}
						onChange={handleSelectedFruitsChange}
						buttons={[
							{
								side: 'left',
								icon: SearchIcon,
								label: 'Open search',
								onClick: () => undefined,
								isGhost: true,
							},
							{
								side: 'right',
								icon: XIcon,
								label: 'Clear selection',
								onClick: () => setSelectedFruits([]),
								isGhost: true,
							},
						]}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { MultiSelectInput } from '@/components/multi-select-input';
import { useState } from 'react';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

function Example() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <MultiSelectInput
      label='Favorite Fruits'
      placeholder='Select options...'
      options={fruits}
      value={value}
      onChange={(nextValue) => setValue(nextValue ?? [])}
      searchable={true}
      hideSelectAll={false}
      maxCount={3}
      closeOnSelect={false}
    />
  );
}`}</Docs.Code>
			</Docs.Section>

			<Docs.Section title='Props'>
				<Docs.PropsTable
					props={[
						{
							name: 'label',
							type: 'string',
							default: '-',
							description: 'Label text shown above the field',
						},
						{
							name: 'description',
							type: 'string',
							default: '-',
							description: 'Helper text shown below the field',
						},
						{
							name: 'value',
							type: 'string[]',
							default: 'undefined',
							description: 'Controlled selected values',
						},
						{
							name: 'onChange',
							type: '(value: string[] | undefined) => void',
							default: '-',
							description: 'Called whenever selected values change',
						},
						{
							name: 'options',
							type: 'MultiSelectInputItem[] | MultiSelectInputGroup[]',
							default: '-',
							description: 'Options list (flat or grouped)',
						},
						{
							name: 'placeholder',
							type: 'string',
							default: "'Select options...'",
							description: 'Placeholder text when no options are selected',
						},
						{
							name: 'searchable',
							type: 'boolean',
							default: 'true',
							description: 'Shows a search input inside the dropdown',
						},
						{
							name: 'hideSelectAll',
							type: 'boolean',
							default: 'false',
							description: 'Hides the select-all action',
						},
						{
							name: 'maxCount',
							type: 'number',
							default: '3',
							description: 'Max selected badges shown before displaying "+N more"',
						},
						{
							name: 'closeOnSelect',
							type: 'boolean',
							default: 'false',
							description: 'Closes dropdown after each option toggle',
						},
						{
							name: 'buttons',
							type: 'InputButton[]',
							default: '-',
							description: 'Inline icon buttons rendered inside the trigger',
						},
						{
							name: 'required',
							type: 'boolean',
							default: 'false',
							description: 'Prevents clearing all selections',
						},
						{
							name: 'disabled',
							type: 'boolean',
							default: 'false',
							description: 'Disables all interactions',
						},
						{
							name: 'readOnly',
							type: 'boolean',
							default: 'false',
							description: 'Shows current value but prevents changes',
						},
						{
							name: 'errors',
							type: 'string[]',
							default: '-',
							description: 'Validation messages to display',
						},
						{
							name: 'showErrors',
							type: 'boolean',
							default: 'false',
							description: 'Controls whether validation messages are visible',
						},
						{
							name: 'className',
							type: 'string',
							default: '-',
							description: 'Additional classes for the trigger button',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
