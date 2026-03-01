import { DataTable } from '@/components/data-table';
import type { DataTableColumn } from '@/components/data-table/types';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/clients/')({
	component: ClientsPage,
});

const columns: DataTableColumn<Client>[] = [
	{
		accessorKey: 'name',
	},
];

const data = Array.from({ length: 1000 }, (_, index) => ({
	id: index,
	name: `Client ${index}`,
}));
type Client = (typeof data)[number];

function ClientsPage() {
	return (
		<main className='p-8'>
			<h1 className='text-2xl font-semibold'>Clients</h1>

			<DataTable
				columns={columns}
				data={data}
			/>
		</main>
	);
}
