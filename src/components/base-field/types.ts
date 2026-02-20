import type { ComponentProps } from 'react';
import type { Label } from '@/components/label';
import type z from 'zod';
import type { inputItemSchema } from './schemas';

export type BaseFieldRootProps = ComponentProps<'div'>;

export type BaseFieldLabelProps = ComponentProps<typeof Label>;

export type BaseFieldDescriptionProps = ComponentProps<'p'>;

export type BaseFieldErrorProps = Omit<ComponentProps<'div'>, 'children'> &
	Pick<BaseFieldInputProps<unknown>, 'errors' | 'showErrors'>;

export type BaseFieldInputProps<TValue> = {
	id?: string;
	name?: string;
	label?: string;
	description?: string;

	value?: TValue;
	onChange?: (value: TValue | undefined) => void;
	onBlur?: () => void;

	disabled?: boolean;
	required?: boolean;
	readOnly?: boolean;

	errors?: string[];
	showErrors?: boolean;
};
export type BaseInputProps<TValue, TProps> = Omit<
	TProps,
	keyof BaseFieldInputProps<TValue> | 'form'
> &
	BaseFieldInputProps<TValue>;

export type InputItem = z.infer<typeof inputItemSchema>;
export type WithItems<TItem extends InputItem> = {
	items: TItem[];
};

export type WithItemList<TItem extends InputItem> = WithItems<TItem> & {
	itemRender?: (item: TItem) => React.ReactNode;
	emptyMessage?: string;
	placeholder?: string;
};

export type UseBaseFieldParams = Pick<
	BaseFieldInputProps<unknown>,
	'errors' | 'showErrors' | 'disabled' | 'required' | 'readOnly'
>;
