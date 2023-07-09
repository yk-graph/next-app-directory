import { headers, cookies } from 'next/headers'
import SupabaseListener from '@/components//client/SupabaseListener'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../../database.types'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ブラウザで持っているアクセストークンを使ってサーバー側で認証する
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  // サーバーサイドで保持しているセッション情報を取得する
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}
