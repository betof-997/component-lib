import type { Table as ReactTable } from '@tanstack/react-table';
import type { DataTablePaginationOptions } from '../types';

export type DataTableFooterProps<TData> = {
	table: ReactTable<TData>;
	data: TData[];
	pagination?: DataTablePaginationOptions;
};
