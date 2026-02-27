import { Table } from '@/components/table';
import { flexRender } from '@tanstack/react-table';
import type { DataTableHeaderProps } from './types';

export const DataTableHeader = <TData,>({
	table,
}: DataTableHeaderProps<TData>) => {
	'use no memo'; // React Compiler + TanStack Table compatibility workaround.

	return (
		<Table.Header>
			{table.getHeaderGroups().map((headerGroup) => (
				<Table.Row key={headerGroup.id}>
					{headerGroup.headers.map((header) => (
						<Table.Head key={header.id}>
							{header.isPlaceholder
								? null
								: flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
						</Table.Head>
					))}
				</Table.Row>
			))}
		</Table.Header>
	);
};
