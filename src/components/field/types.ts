import type { ComponentProps } from 'react';
import type { Label } from '@/components/label';

export type BaseFieldRootProps = ComponentProps<'div'>;

export type BaseFieldLabelProps = ComponentProps<typeof Label>;

export type BaseFieldDescriptionProps = ComponentProps<'p'>;

export type BaseFieldErrorProps = Omit<ComponentProps<'div'>, 'children'> &
	Pick<BaseFieldInputProps<unknown>, 'errors' | 'showErrors'>;

type BaseFieldInputProps<TValue> = {
	name: string;
	label?: string;
	description?: string;

	value?: TValue;
	onChange?: (value: TValue) => void;
	onBlur?: () => void;

	errors?: string[];
	showErrors?: boolean;
};
export type BaseInputProps<TValue, TProps> = Omit<
	TProps,
	keyof BaseFieldInputProps<TValue>
> &
	BaseFieldInputProps<TValue>;
