import type { AnyFormApi } from '@tanstack/react-form';
import type { ComponentProps, ComponentType, ReactNode } from 'react';

export type FormRootProps = {
	className?: string;
	children?: ReactNode;
	form: AnyFormApi & {
		AppForm: ComponentType<{
			children?: ReactNode | undefined;
		}>;
	};
};

export type FormSetProps = ComponentProps<'fieldset'>;

export type FormLegendVariant = 'legend' | 'label';

export type FormLegendProps = ComponentProps<'legend'> & {
	variant?: FormLegendVariant;
};

export type FormGroupProps = ComponentProps<'div'>;

export type FormTitleProps = ComponentProps<'div'>;

export type FormSeparatorProps = ComponentProps<'div'> & {
	children?: ReactNode;
};
