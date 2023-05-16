import Link from 'next/link'
import { t } from './langs'

export default function Home() {
  const login = t('登陆')
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
       <Link href={'/login'}>{login}</Link>
    </main>
  )
}
