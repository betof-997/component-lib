import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { envServer } from '@/env/envServer';
import * as tables from './tables';

const tursoClient = createClient({
	url: envServer.TURSO_DATABASE_URL,
	authToken: envServer.TURSO_AUTH_TOKEN,
});

export const db = drizzle({
	client: tursoClient,
	schema: tables,
});
