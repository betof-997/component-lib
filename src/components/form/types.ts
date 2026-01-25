import type { ComponentProps, ReactNode } from 'react';

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
