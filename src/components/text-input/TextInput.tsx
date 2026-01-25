import { cn } from '@/lib/utils';
import type { ChangeEvent } from 'react';
import { useId } from 'react';
import { BaseField } from '../base-field';
import { useBaseField } from '../base-field/useBaseField';
import type { TextInputProps } from './types';

export const TextInput = ({
	className,
	type,
	onChange,
	value,
	label,
	description,
	errors,
	showErrors,
	disabled,
	required,
	readOnly,
	...props
}: TextInputProps) => {
	const baseId = useId();
	const id = props.id ?? baseId;

	const { inputProps } = useBaseField({
		errors,
		showErrors,
		disabled,
		required,
		readOnly,
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value || '';
		onChange?.(value);
	};

	return (
		<BaseField.Root>
			<BaseField.Label htmlFor={id}>{label}</BaseField.Label>

			<input
				type={type}
				data-slot='text-input'
				value={value}
				onChange={handleChange}
				className={cn(
					'dark:bg-input/30 border-input focus-visible:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				{...inputProps}
				{...props}
				id={id}
			/>

			<BaseField.Description>{description}</BaseField.Description>
			<BaseField.Error
				errors={errors}
				showErrors={showErrors}
			/>
		</BaseField.Root>
	);
};
