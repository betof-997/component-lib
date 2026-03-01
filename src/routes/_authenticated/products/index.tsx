import { DataTable } from '@/components/data-table';
import type { DataTableRowAction } from '@/components/data-table';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { PencilIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/_authenticated/products/')({
	component: ProductsPage,
});

const data = Array.from({ length: 1000 }, (_, index) => ({
	id: index,
	name: `Product ${index}`,
}));

const columns = [
	{
		header: 'Name',
		accessorKey: 'name',
	},
];

type Product = (typeof data)[number];

const rowActions: DataTableRowAction<Product>[] = [
	{
		type: 'button',
		icon: PencilIcon,
		tooltip: 'Edit',
		onClick: () => undefined,
	},
	{
		type: 'button',
		icon: Trash2Icon,
		tooltip: 'Delete',
		variant: 'destructive',
		isGhost: true,
		onClick: () => undefined,
	},
];

const getPaginatedProducts = createServerFn()
	.inputValidator((d: { pageIndex: number; pageSize: number }) => d)
	.handler(async ({ data: { pageIndex, pageSize } }) => {
		const start = pageIndex * pageSize;
		const end = start + pageSize;

		const paginatedData = data.slice(start, end);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		return { items: paginatedData, totalItems: data.length };
	});

function ProductsPage() {
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 10,
	});
	const { data: paginatedProducts, isFetching } = useQuery({
		queryKey: ['products', pagination.pageIndex, pagination.pageSize],
		queryFn: () =>
			getPaginatedProducts({
				data: {
					pageIndex: pagination.pageIndex,
					pageSize: pagination.pageSize,
				},
			}),
		placeholderData: keepPreviousData,
	});

	return (
		<main className='p-8'>
			<h1 className='text-2xl font-semibold'>Products</h1>

			<DataTable
				columns={columns}
				data={paginatedProducts?.items ?? []}
				isLoading={isFetching}
				rowActions={rowActions}
				pagination={{
					isServerSide: true,
					state: pagination,
					onPaginationChange: setPagination,
					totalItems: paginatedProducts?.totalItems ?? 0,
				}}
			/>
		</main>
	);
}
