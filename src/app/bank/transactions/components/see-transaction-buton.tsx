import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import Link from 'next/link'


interface SeeTransactionButtonProps {
  transactionId: string
}

export default function SeeTransactionButton({ transactionId }: SeeTransactionButtonProps) {
  return (
    <Link href={`/bank/my-transactions/${transactionId}`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={'icon-sm'} variant={'outline'}>
            <Eye />
            <TooltipContent>Visualizar transação</TooltipContent>
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </Link>
  )
}
