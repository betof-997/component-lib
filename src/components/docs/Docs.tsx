import { cn } from '@/lib/utils';
import { docsAlertVariants } from './consts';
import type {
	DocsAlertProps,
	DocsCodeProps,
	DocsHeaderProps,
	DocsPreviewProps,
	DocsPropsTableProps,
	DocsSectionProps,
} from './types';

const Header = ({
	className,
	children,
	description,
	...props
}: DocsHeaderProps) => {
	return (
		<header
			data-slot='docs-header'
			className={cn('space-y-2 pb-4 border-b border-border', className)}
			{...props}
		>
			<h1 className='text-3xl font-bold tracking-tight'>{children}</h1>
			{description && (
				<p className='text-muted-foreground text-lg'>{description}</p>
			)}
		</header>
	);
};

const Section = ({
	className,
	children,
	title,
	...props
}: DocsSectionProps) => {
	return (
		<section
			data-slot='docs-section'
			className={cn('space-y-4', className)}
			{...props}
		>
			{title && (
				<h2 className='text-xl font-semibold tracking-tight'>{title}</h2>
			)}
			{children}
		</section>
	);
};

const Preview = ({ className, children, ...props }: DocsPreviewProps) => {
	return (
		<div
			data-slot='docs-preview'
			className={cn(
				'flex flex-wrap items-center gap-3 p-6 rounded-lg border border-border bg-card',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

const Code = ({ className, children, ...props }: DocsCodeProps) => {
	return (
		<pre
			data-slot='docs-code'
			className={cn(
				'p-4 rounded-lg bg-muted text-sm font-mono overflow-x-auto',
				className,
			)}
			{...props}
		>
			<code className='whitespace-pre'>{children}</code>
		</pre>
	);
};

const Alert = ({
	className,
	children,
	title,
	variant,
	...props
}: DocsAlertProps) => {
	return (
		<div
			data-slot='docs-alert'
			className={cn(docsAlertVariants({ variant }), className)}
			{...props}
		>
			{title && <p className='font-medium mb-1'>{title}</p>}
			<div className='text-sm'>{children}</div>
		</div>
	);
};

const PropsTable = ({ props }: DocsPropsTableProps) => {
	return (
		<div
			data-slot='docs-props-table'
			className='overflow-x-auto rounded-lg border border-border'
		>
			<table className='w-full text-sm'>
				<thead className='bg-muted'>
					<tr>
						<th className='px-4 py-3 text-left font-medium'>Prop</th>
						<th className='px-4 py-3 text-left font-medium'>Type</th>
						<th className='px-4 py-3 text-left font-medium'>Default</th>
						<th className='px-4 py-3 text-left font-medium'>Description</th>
					</tr>
				</thead>
				<tbody>
					{props.map((prop) => (
						<tr key={prop.name}>
							<td className='px-4 py-3 border-t border-border'>
								<code className='px-1.5 py-0.5 rounded bg-muted text-sm font-mono'>
									{prop.name}
								</code>
							</td>
							<td className='px-4 py-3 border-t border-border'>
								<code className='px-1.5 py-0.5 rounded bg-muted text-sm font-mono'>
									{prop.type}
								</code>
							</td>
							<td className='px-4 py-3 border-t border-border'>
								{prop.default ? (
									<code className='px-1.5 py-0.5 rounded bg-muted text-sm font-mono'>
										{prop.default}
									</code>
								) : (
									<span className='text-muted-foreground'>-</span>
								)}
							</td>
							<td className='px-4 py-3 border-t border-border text-muted-foreground'>
								{prop.description}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export const Docs = {
	Header,
	Section,
	Preview,
	Code,
	Alert,
	PropsTable,
};
