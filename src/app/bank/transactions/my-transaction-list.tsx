'use client'

import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { TYPE_LABELS } from '@/constants/transactions'
import { formatAmount } from '@/helpers/amount'
import { formatDate } from '@/helpers/date'
import { badgeVariant } from '@/helpers/transactions'
import { useTransactionFilters } from '@/hooks/use-transaction-filters'
import DeleteTransactionButton from './components/delete-transaction-button'
import EditTransaction from './components/edit-transaction'
import Filter from './components/filter'
import SeeTransactionButton from './components/see-transaction-buton'

export default function MyTransactionsList() {
  const {
    search,
    paginated,
    hasNoTransactions,
    hasNoResults,
    setSearch,
    setTypeFilter,
  } = useTransactionFilters()

  return (
    <div className="space-y-4">
      <Filter search={search} onSearchChange={setSearch} onTypeFilterChange={setTypeFilter} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="font-medium text-left truncate w-40">{transaction.title}</p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="wrap-break-word">{transaction.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Badge variant={badgeVariant(transaction.type)}>{TYPE_LABELS[transaction.type]}</Badge>
              </TableCell>
              <TableCell>{formatDate(new Date(transaction.date))}</TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="font-medium text-left  truncate w-40">{formatAmount(transaction.amount)}</p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="wrap-break-word">{formatAmount(transaction.amount)}</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <SeeTransactionButton transactionId={transaction.id} />
                  <EditTransaction transaction={transaction} />
                  <DeleteTransactionButton transaction={transaction} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableCaption>
          {hasNoTransactions && 'Nenhuma transação cadastrada.'}
          {hasNoResults && 'Nenhuma transação encontrada.'}
        </TableCaption>
      </Table>
    </div>
  )
}
