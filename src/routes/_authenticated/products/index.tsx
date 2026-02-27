import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/products/')({
	component: ProductsPage,
})

function ProductsPage() {
	return (
		<main className='p-8'>
			<h1 className='text-2xl font-semibold'>Products</h1>
		</main>
	)
}
