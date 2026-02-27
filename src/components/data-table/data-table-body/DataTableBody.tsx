import { flexRender } from '@tanstack/react-table';
import { Table } from '@/components/table';
import type { DataTableBodyProps } from './types';

export const DataTableBody = <TData,>({
	table,
	colSpan,
	emptyMessage,
}: DataTableBodyProps<TData>) => {
	'use no memo'; // React Compiler + TanStack Table compatibility workaround.

	return (
		<Table.Body>
			{table.getRowModel().rows.length ? (
				table.getRowModel().rows.map((row) => (
					<Table.Row key={row.id} data-state={row.getIsSelected() && 'selected'}>
						{row.getVisibleCells().map((cell) => (
							<Table.Cell key={cell.id}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</Table.Cell>
						))}
					</Table.Row>
				))
			) : (
				<Table.Row>
					<Table.Cell colSpan={colSpan} className='h-24 text-center'>
						{emptyMessage}
					</Table.Cell>
				</Table.Row>
			)}
		</Table.Body>
	);
};
