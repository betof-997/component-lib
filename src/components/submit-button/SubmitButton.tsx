import { Button } from '../button';
import type { SubmitButtonProps } from './types';

export const SubmitButton = (props: SubmitButtonProps) => {
	return (
		<Button
			type='submit'
			{...props}
		/>
	);
};
