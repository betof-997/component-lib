import type {
	ColumnFiltersState,
	SortingState,
	Updater,
} from '@tanstack/react-table';
import type { DataTableFilterItem } from '../types';

export const resolveDataTableSingleColumnSorting = <TData,>(
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

export const resolveDataTableColumnFilters = (
	updater: Updater<ColumnFiltersState>,
	previousColumnFilters: ColumnFiltersState,
) => (typeof updater === 'function' ? updater(previousColumnFilters) : updater);

export const hasDataTableColumnFiltersChanged = (
	previousColumnFilters: ColumnFiltersState,
	nextColumnFilters: ColumnFiltersState,
) => {
	if (previousColumnFilters.length !== nextColumnFilters.length) {
		return true;
	}

	return previousColumnFilters.some((previousFilter, index) => {
		const nextFilter = nextColumnFilters[index];
		return (
			previousFilter?.id !== nextFilter?.id ||
			previousFilter?.value !== nextFilter?.value
		);
	});
};

export const toServerDataTableFilters = <TData,>(
	columnFilters: ColumnFiltersState,
): DataTableFilterItem<TData>[] =>
	columnFilters.flatMap((columnFilter) => {
		if (typeof columnFilter.value !== 'string') {
			return [];
		}

		const value = columnFilter.value.trim();
		if (!value) {
			return [];
		}

		return [
			{
				id: columnFilter.id as Extract<keyof TData, string>,
				value,
			},
		];
	});
