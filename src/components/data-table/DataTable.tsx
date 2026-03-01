import {
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { LoaderCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Table } from '@/components/table';
import { DataTableBody } from './data-table-body';
import { DataTableFooter } from './data-table-footer';
import { DataTableHeader } from './data-table-header';
import { DataTableToolbar } from './data-table-toolbar';
import { DEFAULT_DATA_TABLE_PAGE_SIZE_OPTIONS } from './consts';
import type { DataTableProps } from './types';
import { createRowActionsColumn } from './utils.tsx';

export const DataTable = <TData, TValue>({
	columns,
	data,
	isLoading = false,
	emptyMessage = 'No results.',
	className,
	pagination,
	rowActions,
	toolbarActions,
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
	const hasToolbarActions = (toolbarActions?.length ?? 0) > 0;
	const hasRowActions = (rowActions?.length ?? 0) > 0;
	const resolvedColumns: ColumnDef<TData, unknown>[] = hasRowActions
		? [
				...(columns as ColumnDef<TData, unknown>[]),
				createRowActionsColumn(rowActions ?? []),
			]
		: (columns as ColumnDef<TData, unknown>[]);

	const table = useReactTable({
		data,
		columns: resolvedColumns,
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
			className={cn('relative overflow-hidden', className)}
		>
			{hasToolbarActions && (
				<DataTableToolbar
					table={table}
					actions={toolbarActions ?? []}
				/>
			)}

			<Table.Root
				className={cn(
					shouldShowLoading &&
						'[&_tbody]:opacity-50 [&_tbody]:transition-opacity [&_tbody]:duration-200',
				)}
			>
				<DataTableHeader table={table} />

				<DataTableBody
					table={table}
					colSpan={resolvedColumns.length}
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
