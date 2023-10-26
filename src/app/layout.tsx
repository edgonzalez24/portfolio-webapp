import './assets/css/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header';
import TanstackProvider from './components/lib/TanstackProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edwin | Blog & Portfolio',
  description: "Welcome to Edwin's World! Explore a unique journey through my world, where I will share my passions, knowledge and experiences in this exciting blog. Join me as we explore endless interesting topics together and discover new perspectives. Welcome to my virtual corner!'",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="blob-container">
          <div className="blob left-blob"></div>
          <div className="blob right-blob"></div>
          <TanstackProvider>
            <Header />
            {children}
          </TanstackProvider>
        </div>
      </body>
    </html>
  );
}
