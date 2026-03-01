import {
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import type {
	ColumnDef,
	OnChangeFn,
	SortingState,
	Updater,
} from '@tanstack/react-table';
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

const resolveSingleColumnSorting = <TData,>(
	updater: Updater<SortingState>,
	previousSorting: SortingState,
) => {
	const nextSorting =
		typeof updater === 'function' ? updater(previousSorting) : updater;

	if (nextSorting.length === 0) {
		return [];
	}

	return [
		{
			id: nextSorting[0].id as Extract<keyof TData, string>,
			desc: nextSorting[0].desc,
		},
	];
};

export const DataTable = <TData, TValue>({
	columns,
	data,
	isLoading = false,
	emptyMessage = 'No results.',
	className,
	defaultSort,
	pagination,
	sort,
	rowActions,
	toolbarActions,
}: DataTableProps<TData, TValue>) => {
	'use no memo';

	const [tablePagination, setTablePagination] = useState({
		pageIndex: 0,
		pageSize: DEFAULT_DATA_TABLE_PAGE_SIZE_OPTIONS[0],
	});
	const [tableSorting, setTableSorting] = useState<SortingState>(() =>
		defaultSort ? [defaultSort] : [],
	);
	const serverPagination =
		pagination?.isServerSide === true ? pagination : null;
	const isServerPaginationEnabled = serverPagination !== null;
	const serverSort =
		isServerPaginationEnabled && typeof sort === 'object' && sort !== null
			? sort
			: null;
	const isClientSortEnabled = !isServerPaginationEnabled && sort !== false;
	const isServerSortEnabled = isServerPaginationEnabled && serverSort !== null;
	const isSortingEnabled = isClientSortEnabled || isServerSortEnabled;
	const resolvedPagination = isServerPaginationEnabled
		? serverPagination.state
		: tablePagination;
	const resolvedOnPaginationChange = isServerPaginationEnabled
		? serverPagination.setState
		: setTablePagination;
	const resolvedSorting = isServerSortEnabled
		? [serverSort.state]
		: isClientSortEnabled
			? tableSorting
			: [];
	const resolvedOnSortingChange: OnChangeFn<SortingState> = (updater) => {
		if (!isSortingEnabled) {
			return;
		}

		const nextSorting = resolveSingleColumnSorting<TData>(
			updater,
			resolvedSorting,
		);
		const previousSort = resolvedSorting[0];
		const nextSort = nextSorting[0];
		const hasSortChanged =
			previousSort?.id !== nextSort?.id ||
			previousSort?.desc !== nextSort?.desc;

		if (hasSortChanged) {
			resolvedOnPaginationChange((previousPagination) => ({
				...previousPagination,
				pageIndex: 0,
			}));
		}

		if (isServerSortEnabled) {
			if (!nextSort) {
				return;
			}

			serverSort.setState({
				id: nextSort.id,
				desc: nextSort.desc,
			});
			return;
		}

		setTableSorting(nextSorting);
	};
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
		getSortedRowModel: isClientSortEnabled
			? getSortedRowModel()
			: undefined,
		manualPagination: isServerPaginationEnabled,
		manualSorting: isServerSortEnabled,
		enableSorting: isSortingEnabled,
		enableMultiSort: false,
		enableSortingRemoval: !isServerPaginationEnabled,
		rowCount: isServerPaginationEnabled
			? serverPagination.totalItems
			: undefined,
		onPaginationChange: resolvedOnPaginationChange,
		onSortingChange: isSortingEnabled ? resolvedOnSortingChange : undefined,
		state: {
			pagination: resolvedPagination,
			sorting: resolvedSorting,
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
