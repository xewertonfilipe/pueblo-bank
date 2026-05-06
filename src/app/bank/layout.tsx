import { Header } from '@/components/header'
import { TooltipProvider } from '@/components/ui/tooltip'
import { TransactionsProvider } from '@/context/transactions-context'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function BankLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="pt-BR">
      <div className={`${inter.className} antialiased`}>
        <Toaster />
        <TransactionsProvider>
          <Header
            externalAccess={false}
          />
          <TooltipProvider>
            <div className="w-full max-w-6xl mx-auto p-6">{children}</div>
          </TooltipProvider>
        </TransactionsProvider>
      </div>
    </div>
  )
}
