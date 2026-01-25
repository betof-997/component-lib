import { useMemo } from 'react';
import { Label } from '@/components/label';
import { cn } from '@/lib/utils';
import type {
	BaseFieldDescriptionProps,
	BaseFieldErrorProps,
	BaseFieldLabelProps,
	BaseFieldRootProps,
} from './types';

const Root = ({ className, ...props }: BaseFieldRootProps) => {
	return (
		<div
			role='group'
			data-slot='field'
			className={cn(
				'data-[invalid=true]:text-destructive gap-2 group/field flex w-full flex-col *:w-full [&>.sr-only]:w-auto',
				className,
			)}
			{...props}
		/>
	);
};

const BaseFieldLabel = ({
	className,
	children,
	...props
}: BaseFieldLabelProps) => {
	if (!children) {
		return null;
	}

	return (
		<Label
			data-slot='field-label'
			className={cn(
				'has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug',
				'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
				className,
			)}
			{...props}
		>
			{children}
		</Label>
	);
};

const Description = ({
	className,
	children,
	...props
}: BaseFieldDescriptionProps) => {
	if (!children) {
		return null;
	}

	return (
		<p
			data-slot='field-description'
			className={cn(
				'text-muted-foreground text-left text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal',
				'last:mt-0 nth-last-2:-mt-1',
				'[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

const BaseFieldError = ({
	className,
	errors,
	showErrors,
	...props
}: BaseFieldErrorProps) => {
	const content = useMemo(() => {
		if (!showErrors || !errors?.length) {
			return null;
		}

		const uniqueErrors = Array.from(new Set(errors));
		if (uniqueErrors.length === 1) {
			return uniqueErrors[0];
		}

		return (
			<ul className='ml-4 flex list-disc flex-col gap-1'>
				{uniqueErrors.map(
					(error, index) => !!error && <li key={index}>{error}</li>,
				)}
			</ul>
		);
	}, [errors, showErrors]);

	if (!content) {
		return null;
	}

	return (
		<div
			role='alert'
			data-slot='field-error'
			className={cn('text-destructive text-sm font-normal', className)}
			{...props}
		>
			{content}
		</div>
	);
};

export const BaseField = {
	Root,
	Label: BaseFieldLabel,
	Description,
	Error: BaseFieldError,
};
