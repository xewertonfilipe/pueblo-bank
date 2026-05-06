'use client'

import { Eye } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TYPE_LABELS } from '@/constants/transactions'
import { formatAmount } from '@/helpers/amount'
import { formatDate } from '@/helpers/date'
import { badgeVariant } from '@/helpers/transactions'
import { useTransactionFilters } from '@/hooks/use-transaction-filters'
import DeleteTransactionButton from './components/delete-transaction-button'
import EditTransaction from './components/edit-transaction'
import SeeTransactionButton from './components/see-transaction-buton'

export default function StatementList() {
  const { hasNoTransactions, hasNoResults, recentsTransactions } = useTransactionFilters()

  return (
    <div className="bg-secondary p-6 rounded-xl flex flex-col gap-2">
      <header>
        <h2 className="text-lg font-semibold">Extrato</h2>
      </header>
      <div>
        {hasNoTransactions && 'Ops! Nenhuma transação cadastrada.'}
        {hasNoResults && 'Você ainda não possui transações.'}
      </div>
      <div className='flex flex-col gap-4'>
        {recentsTransactions.map((transaction) => (
          <div className='flex flex-col gap-1' key={transaction.id}>
            <div className='flex flex-row justify-between justify-items-center'>
              <Badge variant={badgeVariant(transaction.type)}>{TYPE_LABELS[transaction.type]}</Badge>
              <div className="flex gap-1">
                <SeeTransactionButton transactionId={transaction.id} />
                <EditTransaction transaction={transaction} />
                <DeleteTransactionButton transaction={transaction} />
              </div>
            </div>
            <p className='font-normal'>{formatDate(new Date(transaction.date))}</p>
            <p className="font-bold">{formatAmount(transaction.amount)}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href={'/bank/my-transactions'}>
          <Button variant={'outline'} size={'sm'}>
            <Eye /> Extrato completo
          </Button>
        </Link>
      </div>
    </div>
  )
}
