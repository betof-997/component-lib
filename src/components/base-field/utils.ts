import { inputItemSchema } from './schemas';
import type { InputItem } from './types';

export const isInputItem = (value: unknown): value is InputItem => {
	if (!value) {
		return false;
	}

	const parsed = inputItemSchema.safeParse(value);
	return parsed.success;
};
