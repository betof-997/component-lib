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

export const DataTable = <TData, TValue>({
	columns,
	data,
	emptyMessage = 'No results.',
	className,
	pagination,
}: DataTableProps<TData, TValue>) => {
	'use no memo';
	const resolvedPageSizeOptions = pagination?.pageSizeOptions ?? [
		10, 25, 50, 100,
	];

	const [tablePagination, setTablePagination] = useState({
		pageIndex: pagination?.initialPageIndex ?? 0,
		pageSize: pagination?.pageSize ?? 10,
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
				totalItems={data.length}
				pageSizeOptions={resolvedPageSizeOptions}
			/>
		</div>
	);
};
