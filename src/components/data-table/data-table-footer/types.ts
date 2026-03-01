import type { Table as ReactTable } from '@tanstack/react-table';
import type { DataTablePaginationOptions } from '../types';

export type DataTableFooterProps<TData> = {
	table: ReactTable<TData>;
	pagination?: DataTablePaginationOptions;
};
