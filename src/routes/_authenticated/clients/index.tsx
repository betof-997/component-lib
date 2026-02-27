import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/clients/')({
	component: ClientsPage,
})

function ClientsPage() {
	return (
		<main className='p-8'>
			<h1 className='text-2xl font-semibold'>Clients</h1>
		</main>
	)
}
