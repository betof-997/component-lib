import { Switch } from '@/components/switch';
import type { SwitchCheckedState } from '@/components/switch';
import { Docs } from '@/components/docs';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/_docs/switch')({
	component: SwitchPage,
});

function SwitchPage() {
	const [basicChecked, setBasicChecked] = useState(false);
	const [notificationsChecked, setNotificationsChecked] = useState(true);

	const handleBasicCheckedChange = (nextChecked: SwitchCheckedState) => {
		setBasicChecked(!!nextChecked);
	};

	const handleNotificationsCheckedChange = (
		nextChecked: SwitchCheckedState,
	) => {
		setNotificationsChecked(!!nextChecked);
	};

	return (
		<>
			<Docs.Header>Switch</Docs.Header>

			<Docs.Section title='Basic'>
				<Docs.Preview>
					<Switch
						label='Enable setting'
						value={basicChecked}
						onChange={handleBasicCheckedChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='With Description'>
				<Docs.Preview>
					<Switch
						label='Email notifications'
						description='Receive updates about product changes.'
						value={notificationsChecked}
						onChange={handleNotificationsCheckedChange}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='States'>
				<Docs.Preview>
					<Switch
						label='With Error'
						errors={['Please enable this setting to continue']}
						showErrors={true}
					/>
					<Switch
						label='Disabled'
						disabled={true}
						value={true}
					/>
					<Switch
						label='Read Only'
						readOnly={true}
						value={true}
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { Switch } from '@/components/switch';
import { useState } from 'react';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      label='Email notifications'
      description='Receive updates about product changes.'
      value={checked}
      onChange={(nextChecked) => setChecked(!!nextChecked)}
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
							description: 'Label text shown next to the switch',
						},
						{
							name: 'description',
							type: 'string',
							default: '-',
							description: 'Helper text shown below the switch',
						},
						{
							name: 'value',
							type: 'boolean',
							default: 'undefined',
							description: 'Controlled checked state',
						},
						{
							name: 'onChange',
							type: '(checked: boolean) => void',
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
							description: 'Validation messages shown below the field',
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
							description: 'Additional classes for the switch root',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
