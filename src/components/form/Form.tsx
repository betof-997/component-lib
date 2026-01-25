import { Separator } from '@/components/separator';
import { cn } from '@/lib/utils';
import type {
	FormGroupProps,
	FormLegendProps,
	FormSeparatorProps,
	FormSetProps,
	FormTitleProps,
} from './types';

const FormSet = ({ className, ...props }: FormSetProps) => {
	return (
		<fieldset
			data-slot='field-set'
			className={cn(
				'gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col',
				className,
			)}
			{...props}
		/>
	);
};

const Legend = ({
	className,
	variant = 'legend',
	...props
}: FormLegendProps) => {
	return (
		<legend
			data-slot='field-legend'
			data-variant={variant}
			className={cn(
				'mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base',
				className,
			)}
			{...props}
		/>
	);
};

const Group = ({ className, ...props }: FormGroupProps) => {
	return (
		<div
			data-slot='field-group'
			className={cn(
				'gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col',
				className,
			)}
			{...props}
		/>
	);
};

const Title = ({ className, ...props }: FormTitleProps) => {
	return (
		<div
			data-slot='field-label'
			className={cn(
				'gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug',
				className,
			)}
			{...props}
		/>
	);
};

const FormSeparator = ({
	children,
	className,
	...props
}: FormSeparatorProps) => {
	return (
		<div
			data-slot='field-separator'
			data-content={!!children}
			className={cn(
				'-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative',
				className,
			)}
			{...props}
		>
			<Separator className='absolute inset-0 top-1/2' />
			{children && (
				<span
					className='text-muted-foreground px-2 bg-background relative mx-auto block w-fit'
					data-slot='field-separator-content'
				>
					{children}
				</span>
			)}
		</div>
	);
};

export const Form = {
	Set: FormSet,
	Legend,
	Group,
	Title,
	Separator: FormSeparator,
};
