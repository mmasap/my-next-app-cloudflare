import { defineConfig } from 'drizzle-kit'
import path from 'path'
import fs from 'fs'

const basePath = path.resolve('.wrangler')
const dbFile = fs
  .readdirSync(basePath, { encoding: 'utf-8', recursive: true })
  .find((f) => f.endsWith('.sqlite'))

if (!dbFile) {
  throw new Error(`.sqlite file not found in ${basePath}`)
}

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: path.resolve(basePath, dbFile),
  },
})
