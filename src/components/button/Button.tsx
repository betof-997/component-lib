import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { buttonVariants } from './consts'
import type { ButtonProps } from './types'

export const Button = ({
	className,
	variant,
	size,
	isOutlined,
	isGhost,
	isRounded,
	asChild = false,
	...props
}: ButtonProps) => {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot='button'
			className={cn(buttonVariants({ variant, size, isOutlined, isGhost, isRounded, className }))}
			{...props}
		/>
	)
}
