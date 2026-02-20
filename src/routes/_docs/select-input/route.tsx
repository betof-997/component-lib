import { Docs } from '@/components/docs';
import { SelectInput } from '@/components/select-input';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/select-input')({
	component: SelectInputPage,
});

const fruits = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'mango', label: 'Mango' },
];

function SelectInputPage() {
	return (
		<>
			<Docs.Header>Select Input</Docs.Header>

			<Docs.Section title='Basic'>
				<Docs.Preview>
					<SelectInput items={fruits} />
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='With Label and Description'>
				<Docs.Preview>
					<SelectInput
						label='Favorite Fruit'
						description='Choose the fruit you like the most.'
						placeholder='Select a fruit'
						items={fruits}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='States'>
				<Docs.Preview>
					<SelectInput
						label='Required'
						required={true}
						placeholder='This field is required'
						items={fruits}
					/>
					<SelectInput
						label='With Error'
						placeholder='Pick one option'
						errors={['Please select a valid option']}
						showErrors={true}
						items={fruits}
					/>
					<SelectInput
						label='Disabled'
						disabled={true}
						items={fruits}
					/>
					<SelectInput
						label='Read Only'
						readOnly={true}
						items={fruits}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Custom Item Render'>
				<Docs.Preview>
					<SelectInput
						label='Fruit with Icon'
						items={fruits}
						itemRender={(item) => `[fruit] ${item.label}`}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { SelectInput } from '@/components/select-input';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

<SelectInput
  label="Favorite Fruit"
  description="Choose one option"
  placeholder="Select a fruit"
  items={fruits}
/>

<SelectInput
  label="Fruit"
  required={true}
  errors={['Please select a fruit']}
  showErrors={true}
  items={fruits}
/>`}</Docs.Code>
			</Docs.Section>

			<Docs.Section title='Props'>
				<Docs.PropsTable
					props={[
						{
							name: 'label',
							type: 'string',
							default: '-',
							description: 'The label text for the select input',
						},
						{
							name: 'description',
							type: 'string',
							default: '-',
							description: 'Helper text displayed below the field',
						},
						{
							name: 'value',
							type: "TItem['value']",
							default: '-',
							description: 'The controlled value of the selected option',
						},
						{
							name: 'onChange',
							type: "(value: TItem['value'] | undefined) => void",
							default: '-',
							description: 'Callback fired when selected value changes',
						},
						{
							name: 'items',
							type: 'TItem[]',
							default: '-',
							description: 'List of available options',
						},
						{
							name: 'placeholder',
							type: 'string',
							default: "'Select an option...'",
							description: 'Placeholder text for the input',
						},
						{
							name: 'emptyMessage',
							type: 'string',
							default: "'No options found'",
							description: 'Message shown when there are no matching items',
						},
						{
							name: 'itemRender',
							type: '(item: TItem) => React.ReactNode',
							default: '-',
							description: 'Custom renderer for each option',
						},
						{
							name: 'allowEmpty',
							type: 'boolean',
							default: 'false',
							description: 'Allows clearing selection with empty value',
						},
						{
							name: 'required',
							type: 'boolean',
							default: 'false',
							description: 'Marks the input as required',
						},
						{
							name: 'disabled',
							type: 'boolean',
							default: 'false',
							description: 'Disables user interaction',
						},
						{
							name: 'readOnly',
							type: 'boolean',
							default: 'false',
							description: 'Makes input read-only',
						},
						{
							name: 'errors',
							type: 'string[]',
							default: '-',
							description: 'Array of error messages to display',
						},
						{
							name: 'showErrors',
							type: 'boolean',
							default: 'false',
							description: 'Whether to display validation messages',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
