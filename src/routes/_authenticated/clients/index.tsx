import { DataTable } from '@/components/data-table';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/clients/')({
	component: ClientsPage,
});

const columns = [
	{
		header: 'Name',
		accessorKey: 'name',
	},
];

const data = Array.from({ length: 1000 }, (_, index) => ({
	id: index,
	name: `Client ${index}`,
}));

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
