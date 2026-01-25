import { TextInput } from '@/components/text-input';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './contexts';
import { FormInputWrapper } from './FormInputWrapper';

export { useFieldContext, useFormContext } from './contexts';

export const { useAppForm, withFieldGroup, withForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		TextInput: FormInputWrapper(TextInput),
	},
	formComponents: {},
});
