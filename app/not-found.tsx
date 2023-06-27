import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>404 NotFound</p>
      <Link href="/">Home</Link>
    </div>
  )
}