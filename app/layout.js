import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import { ConvexClientProvider } from './ConvexClientProvider'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export const metadata = {
  title: 'Tspot - Events Platform',
  description: 'Discover and create events',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ConvexClientProvider>
              {/* Header */}
              <Header />

              {/* Main */}
              <main className="relative min-h-screen container mx-auto pt-40 md:pt-32 ">
                {/* glow */}
                <div className="pointer-event-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl "></div>
                  <div className="absolute bottom-0 right-1/4 w-110 h-110 bg-yellow-200/20 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 min-h-[70vh]">{children}</div>
                {/* footer */}
                <footer className="border-t border-gray-800/50 py-8 px-6 mx-auto max-w-7xl ">
                  <div className="text-sm text-gray-400">made with ♥ by tushu</div>
                </footer>
              </main>
            </ConvexClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
