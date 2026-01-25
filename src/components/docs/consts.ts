import { cva } from 'class-variance-authority';

export const docsAlertVariants = cva(
	'rounded-lg border p-4 text-sm *:first:mt-0 *:last:mb-0',
	{
		variants: {
			variant: {
				default: 'bg-muted/50 border-border text-foreground',
				warning:
					'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/50 dark:border-amber-900 dark:text-amber-200',
				destructive:
					'bg-destructive/10 border-destructive/50 text-destructive dark:bg-destructive/20',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);
