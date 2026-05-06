'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { TransactionInterface } from '@/interfaces/transactions'
import EditTransactionDesktop from './edit-transaction-desktop'
import EditTransactionMobile from './edit-transaction-mobile'

interface EditTransactionProps {
  transaction: TransactionInterface
}

export default function EditTransaction({ transaction }: EditTransactionProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <EditTransactionMobile transaction={transaction} />
  }

  return <EditTransactionDesktop transaction={transaction} />
}
