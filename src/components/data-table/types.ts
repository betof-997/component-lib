import type {
	ColumnDef,
	OnChangeFn,
	PaginationState,
} from '@tanstack/react-table';

type DataTablePaginationBaseOptions = {
	pageSizeOptions?: number[];
};

export type DataTableClientPaginationOptions = {
	isServerSide?: false;
};

export type DataTableServerPaginationOptions = {
	isServerSide: true;
	state: PaginationState;
	onPaginationChange: OnChangeFn<PaginationState>;
	totalItems: number;
};

export type DataTablePaginationOptions = DataTablePaginationBaseOptions &
		(DataTableClientPaginationOptions | DataTableServerPaginationOptions);

export type DataTableProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	isLoading?: boolean;
	emptyMessage?: string;
	className?: string;
	pagination?: DataTablePaginationOptions;
};
