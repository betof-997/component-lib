import { Checkbox } from '@/components/checkbox';
import type { CheckboxCheckedState } from '@/components/checkbox';
import { Docs } from '@/components/docs';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/_docs/checkbox')({
	component: CheckboxPage,
});

function CheckboxPage() {
	const [basicChecked, setBasicChecked] = useState(false);
	const [termsChecked, setTermsChecked] = useState(false);
	const [indeterminateChecked, setIndeterminateChecked] =
		useState<CheckboxCheckedState>('indeterminate');

	const handleBasicCheckedChange = (nextChecked: CheckboxCheckedState) => {
		setBasicChecked(nextChecked === true);
	};

	const handleTermsCheckedChange = (nextChecked: CheckboxCheckedState) => {
		setTermsChecked(nextChecked === true);
	};

	const handleIndeterminateCheckedChange = (
		nextChecked: CheckboxCheckedState,
	) => {
		setIndeterminateChecked(nextChecked);
	};

	return (
		<>
			<Docs.Header>Checkbox</Docs.Header>

			<Docs.Section title='Basic'>
				<Docs.Preview>
					<Checkbox
						label='Accept terms'
						value={basicChecked}
						onChange={handleBasicCheckedChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='With Description'>
				<Docs.Preview>
					<Checkbox
						label='Email notifications'
						description='Receive updates about product news and releases.'
						value={termsChecked}
						onChange={handleTermsCheckedChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='States'>
				<Docs.Preview>
					<Checkbox
						label='Required'
						required={true}
						value={basicChecked}
						onChange={handleBasicCheckedChange}
					/>
					<Checkbox
						label='With Error'
						errors={['You must accept the terms before continuing']}
						showErrors={true}
					/>
					<Checkbox
						label='Disabled'
						disabled={true}
						value={true}
					/>
					<Checkbox
						label='Read Only'
						readOnly={true}
						value={true}
					/>
					<Checkbox
						label='Indeterminate'
						value={indeterminateChecked}
						onChange={handleIndeterminateCheckedChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { Checkbox } from '@/components/checkbox';
import { useState } from 'react';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label='Accept terms'
      description='You must agree before submitting.'
      value={checked}
      onChange={(nextChecked) => setChecked(nextChecked === true)}
      required={true}
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
							description: 'Label text shown next to the checkbox',
						},
						{
							name: 'description',
							type: 'string',
							default: '-',
							description: 'Helper text shown below the checkbox',
						},
						{
							name: 'value',
							type: "boolean | 'indeterminate'",
							default: 'undefined',
							description: 'Controlled checked state',
						},
						{
							name: 'onChange',
							type: "(checked: boolean | 'indeterminate') => void",
							default: '-',
							description: 'Called whenever the checked state changes',
						},
						{
							name: 'required',
							type: 'boolean',
							default: 'false',
							description: 'Marks the field as required',
						},
						{
							name: 'disabled',
							type: 'boolean',
							default: 'false',
							description: 'Disables interaction',
						},
						{
							name: 'readOnly',
							type: 'boolean',
							default: 'false',
							description: 'Prevents user changes while keeping focusability',
						},
						{
							name: 'errors',
							type: 'string[]',
							default: '-',
							description: 'Validation messages to render below the field',
						},
						{
							name: 'showErrors',
							type: 'boolean',
							default: 'false',
							description: 'Controls visibility of validation messages',
						},
						{
							name: 'className',
							type: 'string',
							default: '-',
							description: 'Additional classes for the checkbox control',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
