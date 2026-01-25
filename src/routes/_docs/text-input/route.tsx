import { Docs } from '@/components/docs';
import { TextInput } from '@/components/text-input';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/text-input')({
	component: TextInputPage,
});

function TextInputPage() {
	return (
		<>
			<Docs.Header>Text Input</Docs.Header>

			<Docs.Section title='Basic'>
				<Docs.Preview>
					<TextInput placeholder='Enter your name' />
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='With Label and Description'>
				<Docs.Preview>
					<TextInput
						label='Email'
						description='We will never share your email.'
						placeholder='you@example.com'
						type='email'
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='States'>
				<Docs.Preview>
					<TextInput
						label='Required'
						isRequired={true}
						placeholder='This field is required'
					/>
					<TextInput
						label='With Error'
						placeholder='you@example.com'
						errors={['Please enter a valid email address']}
						showErrors={true}
					/>
					<TextInput
						label='Disabled'
						isDisabled={true}
						value='Cannot edit this'
					/>
					<TextInput
						label='Read Only'
						isReadOnly={true}
						value='Read only value'
					/>
				</Docs.Preview>
			</Docs.Section>

			<Docs.Section title='Usage'>
				<Docs.Code>{`import { TextInput } from '@/components/text-input';

<TextInput
  label="Email"
  description="We will never share your email."
  placeholder="you@example.com"
  type="email"
/>

<TextInput
  label="Name"
  isRequired={true}
  errors={['Name is required']}
  showErrors={true}
/>`}</Docs.Code>
			</Docs.Section>

			<Docs.Section title='Props'>
				<Docs.PropsTable
					props={[
						{
							name: 'label',
							type: 'string',
							default: '-',
							description: 'The label text for the input',
						},
						{
							name: 'description',
							type: 'string',
							default: '-',
							description: 'Helper text displayed below the input',
						},
						{
							name: 'value',
							type: 'string',
							default: '-',
							description: 'The controlled value of the input',
						},
						{
							name: 'onChange',
							type: '(value: string) => void',
							default: '-',
							description: 'Callback fired when the input value changes',
						},
						{
							name: 'type',
							type: "'text' | 'email' | 'password' | 'number' | ...",
							default: "'text'",
							description: 'The HTML input type',
						},
						{
							name: 'placeholder',
							type: 'string',
							default: '-',
							description: 'Placeholder text shown when the input is empty',
						},
						{
							name: 'isRequired',
							type: 'boolean',
							default: 'false',
							description: 'Marks the input as required',
						},
						{
							name: 'isDisabled',
							type: 'boolean',
							default: 'false',
							description: 'Disables the input',
						},
						{
							name: 'isReadOnly',
							type: 'boolean',
							default: 'false',
							description: 'Makes the input read-only',
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
							description: 'Whether to display the error messages',
						},
					]}
				/>
			</Docs.Section>
		</>
	);
}
