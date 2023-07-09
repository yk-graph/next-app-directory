import RefreshBtn from '@/components/client/RefreshBtn'
import TimerCounter from '@/components/client/TimerCounter'
import NotesList from '@/components/server/NotesList'
import Spinner from '@/components/server/Spinner'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="m-10 text-center">
      <p>This is Home Page</p>
      <Suspense fallback={<Spinner color="border-green-500" />}>
        <NotesList />
      </Suspense>
      <TimerCounter />
      <RefreshBtn />
    </main>
  )
}
