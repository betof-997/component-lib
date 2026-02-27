import { z } from 'zod';

export const envServerSchema = z.object({
	TURSO_DATABASE_URL: z
		.url('TURSO_DATABASE_URL must be a valid URL')
		.nonempty('TURSO_DATABASE_URL is required'),
	TURSO_AUTH_TOKEN: z.string().nonempty('TURSO_AUTH_TOKEN is required'),
});

export const envServer = envServerSchema.parse(process.env);
