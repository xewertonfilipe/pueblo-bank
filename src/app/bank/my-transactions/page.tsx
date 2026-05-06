'use client'

import BackButton from '@/components/ui/back-button'
import { Suspense } from 'react'

import MyTransactionsListLoading from '../transactions/components/loading/my-transactions-list-loading'
import TransactionsList from '../transactions/my-transaction-list'

export default function MyTransactionsPage() {
  return (
    <div>
      <BackButton />
      <div className="flex flex-col gap-6 p-6">
        <header>
          <h2 className="text-lg font-semibold">Extrato</h2>
          <p className="text-sm text-muted-foreground">Confira todas as transações realizadas.</p>
        </header>
        <Suspense fallback={<MyTransactionsListLoading />}>
          <TransactionsList />
        </Suspense>
      </div>
    </div>
  )
}
