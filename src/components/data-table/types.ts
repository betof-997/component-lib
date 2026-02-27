import type { ColumnDef } from '@tanstack/react-table';

export type DataTablePaginationOptions = {
	pageSizeOptions?: number[];
};

export type DataTableProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	emptyMessage?: string;
	className?: string;
	pagination?: DataTablePaginationOptions;
};
