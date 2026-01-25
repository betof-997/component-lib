import type { ComponentProps } from 'react';
import type { UseBaseFieldParams } from './types';

export const useBaseField = ({
	errors,
	showErrors,
	isDisabled,
	isRequired,
	isReadOnly,
}: UseBaseFieldParams) => {
	const isInvalid = !!errors?.length && !!showErrors;

	const inputProps = {
		'aria-invalid': isInvalid,
		'aria-disabled': isDisabled,
		'aria-required': isRequired,
		'aria-readonly': isReadOnly,
		disabled: isDisabled,
		required: isRequired,
		readOnly: isReadOnly,
	} satisfies ComponentProps<'input'>;

	return {
		inputProps,
	};
};
