import { cn } from '@/lib/utils';
import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import { CheckIcon, ChevronDownIcon, XIcon } from 'lucide-react';
import * as React from 'react';
import type {
	SelectChipProps,
	SelectChipsInputProps,
	SelectChipsProps,
	SelectCollectionProps,
	SelectContentProps,
	SelectEmptyProps,
	SelectGroupProps,
	SelectInputProps,
	SelectItemProps,
	SelectLabelProps,
	SelectListProps,
	SelectRootProps,
	SelectSeparatorProps,
	SelectTriggerProps,
} from './types';

const Root = ({ ...props }: SelectRootProps) => {
	return (
		<ComboboxPrimitive.Root
			data-slot='select'
			{...props}
		/>
	);
};

const Input = ({
	className,
	showTrigger = true,
	disabled = false,
	...props
}: SelectInputProps) => {
	return (
		<div
			data-slot='select-input-wrapper'
			className='relative w-fit'
		>
			<ComboboxPrimitive.Input
				data-slot='select-input'
				disabled={disabled}
				className={cn(
					'border-input data-placeholder:text-muted-foreground dark:bg-input/30 focus:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent text-base md:text-sm transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 w-full h-8 py-1.5 pr-8 pl-2.5',
					className,
				)}
				{...props}
			/>
			{showTrigger && <Trigger disabled={disabled} />}
		</div>
	);
};

const Trigger = ({
	className,
	...props
}: SelectTriggerProps) => {
	return (
		<ComboboxPrimitive.Trigger
			data-slot='select-trigger'
			className={cn(
				"text-muted-foreground hover:text-foreground transition-colors absolute top-1/2 -translate-y-1/2 flex items-center justify-center [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 right-2 size-4",
				className,
			)}
			{...props}
		>
			<ChevronDownIcon />
		</ComboboxPrimitive.Trigger>
	);
};

const Content = ({
	className,
	side = 'bottom',
	sideOffset = 6,
	align = 'start',
	alignOffset = 0,
	anchor,
	...props
}: SelectContentProps) => {
	return (
		<ComboboxPrimitive.Portal>
			<ComboboxPrimitive.Positioner
				side={side}
				sideOffset={sideOffset}
				align={align}
				alignOffset={alignOffset}
				anchor={anchor}
				className='isolate z-50'
			>
				<ComboboxPrimitive.Popup
					data-slot='select-content'
					data-chips={!!anchor}
					className={cn(
						'bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 max-h-72 min-w-36 overflow-hidden rounded-lg shadow-md ring-1 duration-100 relative w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width) group/select-content',
						className,
					)}
					{...props}
				/>
			</ComboboxPrimitive.Positioner>
		</ComboboxPrimitive.Portal>
	);
};

const List = ({ className, ...props }: SelectListProps) => {
	return (
		<ComboboxPrimitive.List
			data-slot='select-list'
			className={cn(
				'no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0 overscroll-contain',
				className,
			)}
			{...props}
		/>
	);
};

const Item = ({ className, children, ...props }: SelectItemProps) => {
	return (
		<ComboboxPrimitive.Item
			data-slot='select-item'
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		>
			{children}
			<ComboboxPrimitive.ItemIndicator
				render={
					<span className='pointer-events-none absolute right-2 flex size-4 items-center justify-center'>
						<CheckIcon className='pointer-events-none' />
					</span>
				}
			/>
		</ComboboxPrimitive.Item>
	);
};

const Group = ({ className, ...props }: SelectGroupProps) => {
	return (
		<ComboboxPrimitive.Group
			data-slot='select-group'
			className={cn(className)}
			{...props}
		/>
	);
};

const Label = ({ className, ...props }: SelectLabelProps) => {
	return (
		<ComboboxPrimitive.GroupLabel
			data-slot='select-label'
			className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
			{...props}
		/>
	);
};

const Separator = ({ className, ...props }: SelectSeparatorProps) => {
	return (
		<ComboboxPrimitive.Separator
			data-slot='select-separator'
			className={cn('bg-border -mx-1 my-1 h-px', className)}
			{...props}
		/>
	);
};

const Empty = ({ className, ...props }: SelectEmptyProps) => {
	return (
		<ComboboxPrimitive.Empty
			data-slot='select-empty'
			className={cn(
				'text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/select-content:flex',
				className,
			)}
			{...props}
		/>
	);
};

const Collection = ({ ...props }: SelectCollectionProps) => {
	return (
		<ComboboxPrimitive.Collection
			data-slot='select-collection'
			{...props}
		/>
	);
};

const Chips = ({ className, ...props }: SelectChipsProps) => {
	return (
		<ComboboxPrimitive.Chips
			data-slot='select-chips'
			className={cn(
				'dark:bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive dark:has-aria-invalid:border-destructive/50 flex min-h-8 flex-wrap items-center gap-1 rounded-lg border bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:ring-[3px] has-aria-invalid:ring-[3px] has-data-[slot=select-chip]:px-1',
				className,
			)}
			{...props}
		/>
	);
};

const Chip = ({
	className,
	children,
	showRemove = true,
	...props
}: SelectChipProps) => {
	return (
		<ComboboxPrimitive.Chip
			data-slot='select-chip'
			className={cn(
				'bg-muted text-foreground flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm px-1.5 text-xs font-medium whitespace-nowrap has-data-[slot=select-chip-remove]:pr-0 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50',
				className,
			)}
			{...props}
		>
			{children}
			{showRemove && (
				<ComboboxPrimitive.ChipRemove
					className='-ml-1 opacity-50 hover:opacity-100'
					data-slot='select-chip-remove'
					render={
						<button
							type='button'
							className='flex size-5 items-center justify-center rounded-sm hover:bg-foreground/10'
						>
							<XIcon className='pointer-events-none size-3' />
						</button>
					}
				/>
			)}
		</ComboboxPrimitive.Chip>
	);
};

const ChipsInput = ({ className, ...props }: SelectChipsInputProps) => {
	return (
		<ComboboxPrimitive.Input
			data-slot='select-chips-input'
			className={cn('min-w-16 flex-1 outline-none', className)}
			{...props}
		/>
	);
};

export const useSelectAnchor = () => {
	return React.useRef<HTMLDivElement | null>(null);
};

export const Select = {
	Root,
	Input,
	Trigger,
	Content,
	List,
	Item,
	Group,
	Label,
	Separator,
	Empty,
	Collection,
	Chips,
	Chip,
	ChipsInput,
};
