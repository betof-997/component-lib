import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
	{
		variants: {
			variant: {
				primary:
					'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				xxs: 'h-5 rounded-md gap-1 px-1.5 text-[11px] has-[>svg]:px-1.5',
				xs: 'h-7 rounded-md gap-1.5 px-2.5 text-xs has-[>svg]:px-2',
				sm: 'h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5',
				md: 'h-9 px-4 py-2 has-[>svg]:px-3',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
			},
			isRounded: {
				true: 'rounded-full px-0 py-0',
				false: '',
			},
			isOutlined: {
				true: 'bg-transparent border',
				false: '',
			},
			isGhost: {
				true: 'bg-transparent border-none',
				false: '',
			},
		},
		compoundVariants: [
			// outlined
			{
				variant: 'primary',
				isOutlined: true,
				className:
					'border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
			},
			{
				variant: 'secondary',
				isOutlined: true,
				className:
					'border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 active:bg-secondary-foreground/20',
			},
			{
				variant: 'destructive',
				isOutlined: true,
				className:
					'border-destructive text-destructive hover:bg-destructive/10 active:bg-destructive/20',
			},
			{
				variant: 'link',
				isOutlined: true,
				className:
					'border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
			},

			// ghost
			{
				variant: 'primary',
				isGhost: true,
				className: 'text-primary hover:bg-black/5 active:bg-black/10',
			},
			{
				variant: 'secondary',
				isGhost: true,
				className:
					'text-secondary-foreground hover:bg-secondary-foreground/5 active:bg-secondary-foreground/10',
			},
			{
				variant: 'destructive',
				isGhost: true,
				className: 'text-destructive hover:bg-black/5 active:bg-black/10',
			},
			{
				variant: 'link',
				isGhost: true,
				className: 'text-primary hover:bg-black/5 active:bg-black/10',
			},

			// rounded
			{
				size: 'xxs',
				isRounded: true,
				className: 'w-5 min-w-5',
			},
			{
				size: 'xs',
				isRounded: true,
				className: 'w-7 min-w-7',
			},
			{
				size: 'sm',
				isRounded: true,
				className: 'w-8 min-w-8',
			},
			{
				size: 'md',
				isRounded: true,
				className: 'w-9 min-w-9',
			},
			{
				size: 'lg',
				isRounded: true,
				className: 'w-10 min-w-10',
			},
		],
		defaultVariants: {
			variant: 'primary',
			size: 'md',
			isOutlined: false,
			isGhost: false,
		},
	},
);
