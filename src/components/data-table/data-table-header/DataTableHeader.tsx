import { Table } from '@/components/table';
import { flexRender } from '@tanstack/react-table';
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DataTableHeaderProps } from './types';
import type { DataTableColumnMeta } from '../types';

export const DataTableHeader = <TData,>({
	table,
}: DataTableHeaderProps<TData>) => {
	'use no memo'; // React Compiler + TanStack Table compatibility workaround.

	return (
		<Table.Header>
			{table.getHeaderGroups().map((headerGroup) => (
				<Table.Row key={headerGroup.id}>
					{headerGroup.headers.map((header) => {
						const meta = header.column.columnDef.meta as
							| DataTableColumnMeta
							| undefined;

						return (
							<Table.Head
								key={header.id}
								className={cn(
									meta?.headerClassName,
									header.column.getIsSorted() && 'bg-muted/70',
								)}
							>
								{header.isPlaceholder ? null : header.column.getCanSort() ? (
									<button
										type='button'
										className='inline-flex cursor-pointer items-center gap-1 select-none'
										onClick={header.column.getToggleSortingHandler()}
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
										{header.column.getIsSorted() === 'asc' ? (
											<ArrowUpIcon className='text-muted-foreground size-3.5' />
										) : header.column.getIsSorted() === 'desc' ? (
											<ArrowDownIcon className='text-muted-foreground size-3.5' />
										) : (
											<ArrowUpDownIcon className='text-muted-foreground size-3.5' />
										)}
									</button>
								) : (
									flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)
								)}
							</Table.Head>
						);
					})}
				</Table.Row>
			))}
		</Table.Header>
	);
};
