import type { Table as ReactTable } from '@tanstack/react-table';

export type DataTableFooterProps<TData> = {
	table: ReactTable<TData>;
	totalItems: number;
	pageSizeOptions: number[];
};
