import { db } from '@/drizzle/db'
import { usersTable } from '@/drizzle/schema'

export const runtime = 'edge'

export default async function Home() {
  const users = await db.select().from(usersTable)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}
