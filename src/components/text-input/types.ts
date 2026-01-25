import type { ComponentProps } from 'react';
import type { BaseInputProps } from '../field/types';

export type TextInputProps = BaseInputProps<string, ComponentProps<'input'>>;
