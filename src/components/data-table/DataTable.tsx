import {
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { LoaderCircleIcon } from 'lucide-react';
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
	isLoading = false,
	emptyMessage = 'No results.',
	className,
	pagination,
}: DataTableProps<TData, TValue>) => {
	'use no memo';

	const [tablePagination, setTablePagination] = useState({
		pageIndex: 0,
		pageSize: DEFAULT_DATA_TABLE_PAGE_SIZE_OPTIONS[0],
	});
	const isServerPaginationEnabled = pagination?.isServerSide === true;
	const resolvedPagination = isServerPaginationEnabled
		? pagination.state
		: tablePagination;
	const resolvedOnPaginationChange = isServerPaginationEnabled
		? pagination.onPaginationChange
		: setTablePagination;

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: isServerPaginationEnabled
			? undefined
			: getPaginationRowModel(),
		manualPagination: isServerPaginationEnabled,
		rowCount: isServerPaginationEnabled ? pagination.totalItems : undefined,
		onPaginationChange: resolvedOnPaginationChange,
		state: {
			pagination: resolvedPagination,
		},
	});

	const shouldShowLoading =
		isLoading || (isServerPaginationEnabled && data.length === 0);

	return (
		<div
			data-slot='data-table'
			className={cn('overflow-hidden rounded-md border relative', className)}
		>
			<Table.Root
				className={cn(
					shouldShowLoading &&
						'[&_tbody]:opacity-50 [&_tbody]:transition-opacity [&_tbody]:duration-200',
				)}
			>
				<DataTableHeader table={table} />

				<DataTableBody
					table={table}
					colSpan={columns.length}
					isLoading={shouldShowLoading}
					emptyMessage={emptyMessage}
				/>
			</Table.Root>

			{shouldShowLoading && (
				<div className='pointer-events-none absolute inset-x-0 top-10 bottom-0 flex items-center justify-center'>
					<LoaderCircleIcon className='text-muted-foreground size-5 animate-spin' />
				</div>
			)}

			<DataTableFooter
				table={table}
				pagination={pagination}
			/>
		</div>
	);
};
