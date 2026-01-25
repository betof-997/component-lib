import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import type { docsAlertVariants } from './consts';

export type DocsHeaderProps = ComponentProps<'header'> & {
	description?: string;
};

export type DocsSectionProps = ComponentProps<'section'> & {
	title?: string;
};

export type DocsPreviewProps = ComponentProps<'div'>;

export type DocsCodeProps = ComponentProps<'pre'>;

export type DocsAlertProps = ComponentProps<'div'> &
	VariantProps<typeof docsAlertVariants> & {
		title?: string;
	};

export type DocsPropsTableProps = {
	props: {
		name: string;
		type: string;
		default?: string;
		description: string;
	}[];
};
