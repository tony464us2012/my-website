import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'


const inter = Inter({ subsets: ['latin'],
variable: '--font-inter' },
)

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={`${inter.variable} font-sans bg-light w-full min-h-screen`}>
      </main>
    </>
  )
}
