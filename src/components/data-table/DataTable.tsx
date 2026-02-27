import {
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Table } from '@/components/table';
import { DataTableBody } from './data-table-body';
import { DataTableFooter } from './data-table-footer';
import { DataTableHeader } from './data-table-header';
import type { DataTableProps } from './types';
import { DEFAULT_DATA_TABLE_PAGE_SIZE_OPTIONS } from './consts';

export const DataTable = <TData, TValue>({
	columns,
	data,
	emptyMessage = 'No results.',
	className,
	pagination,
}: DataTableProps<TData, TValue>) => {
	'use no memo';

	const [tablePagination, setTablePagination] = useState({
		pageIndex: 0,
		pageSize: DEFAULT_DATA_TABLE_PAGE_SIZE_OPTIONS[0],
	});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setTablePagination,
		state: {
			pagination: tablePagination,
		},
	});

	return (
		<div
			data-slot='data-table'
			className={cn('overflow-hidden rounded-md border', className)}
		>
			<Table.Root>
				<DataTableHeader table={table} />

				<DataTableBody
					table={table}
					colSpan={columns.length}
					emptyMessage={emptyMessage}
				/>
			</Table.Root>

			<DataTableFooter
				table={table}
				data={data}
				pagination={pagination}
			/>
		</div>
	);
};
