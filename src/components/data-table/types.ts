import type {
	ColumnDef,
	OnChangeFn,
	PaginationState,
} from '@tanstack/react-table';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { ButtonProps } from '@/components/button';
import type { DropdownMenuItemProps } from '@/components/dropdown-menu';

type DataTablePaginationBaseOptions = {
	pageSizeOptions?: number[];
};

export type DataTableClientPaginationOptions = {
	isServerSide?: false;
};

export type DataTableServerPaginationOptions = {
	isServerSide: true;
	state: PaginationState;
	onPaginationChange: OnChangeFn<PaginationState>;
	totalItems: number;
};

export type DataTablePaginationOptions = DataTablePaginationBaseOptions &
	(DataTableClientPaginationOptions | DataTableServerPaginationOptions);

export type DataTableColumnMeta = {
	headerClassName?: string;
	cellClassName?: string;
};

export type DataTableRowActionButton<TData> = {
	type: 'button';
	icon: LucideIcon;
	tooltip: string;
	onClick: (rowData: TData) => void;
	className?: string;
} & Pick<ButtonProps, 'variant' | 'isOutlined' | 'isGhost' | 'disabled'>;

export type DataTableRowActionDropdownItem<TData> = {
	id?: string;
	icon?: LucideIcon;
	label: ReactNode;
	onClick: (rowData: TData) => void;
	disabled?: boolean;
} & Pick<DropdownMenuItemProps, 'className' | 'variant'>;

export type DataTableRowActionDropdown<TData> = {
	type: 'dropdown';
	icon?: LucideIcon;
	tooltip?: string;
	items: DataTableRowActionDropdownItem<TData>[];
	className?: string;
} & Pick<ButtonProps, 'variant' | 'isOutlined' | 'isGhost' | 'disabled'>;

export type DataTableRowActionOther = {
	type: 'other';
	label: ReactNode;
	className?: string;
};

export type DataTableRowAction<TData> =
	| DataTableRowActionButton<TData>
	| DataTableRowActionDropdown<TData>
	| DataTableRowActionOther;

export type DataTableProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	isLoading?: boolean;
	emptyMessage?: string;
	className?: string;
	pagination?: DataTablePaginationOptions;
	rowActions?: DataTableRowAction<TData>[];
};
