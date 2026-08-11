import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Gowun_Batang } from 'next/font/google'
import './globals.css'

const gowunBatang = Gowun_Batang({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-display' })

export const metadata: Metadata = {
  title: '정도치과 | 시작 전에, 다 말씀드립니다.',
  description: '임플란트와 건강보험 적용 조건을 치료 전에 차분히 설명하는 정도치과 상담 안내 페이지입니다.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#231f1b',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`bg-[#231f1b] ${gowunBatang.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
