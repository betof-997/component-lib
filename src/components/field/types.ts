import type { ComponentProps } from 'react';
import type { Label } from '@/components/label';

export type BaseFieldRootProps = ComponentProps<'div'>;

export type BaseFieldLabelProps = ComponentProps<typeof Label>;

export type BaseFieldDescriptionProps = ComponentProps<'p'>;

export type BaseFieldErrorProps = Omit<ComponentProps<'div'>, 'children'> &
	Pick<BaseFieldInputProps<unknown>, 'errors' | 'showErrors'>;

export type BaseFieldInputProps<TValue> = {
	name?: string;
	label?: string;
	description?: string;

	value?: TValue;
	onChange?: (value: TValue) => void;
	onBlur?: () => void;

	isDisabled?: boolean;
	isRequired?: boolean;
	isReadOnly?: boolean;

	errors?: string[];
	showErrors?: boolean;
};
export type BaseInputProps<TValue, TProps> = Omit<
	TProps,
	| keyof BaseFieldInputProps<TValue>
	| 'form'
	| 'disabled'
	| 'required'
	| 'readOnly'
> &
	BaseFieldInputProps<TValue>;

export type UseBaseFieldParams = Pick<
	BaseFieldInputProps<unknown>,
	'errors' | 'showErrors' | 'isDisabled' | 'isRequired' | 'isReadOnly'
>;
