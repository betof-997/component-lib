import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import type { buttonVariants } from './consts'

export type ButtonVariant = NonNullable<
	VariantProps<typeof buttonVariants>['variant']
>

export type ButtonSize = NonNullable<
	VariantProps<typeof buttonVariants>['size']
>

export type ButtonProps = ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}
