import BackButton from '@/components/ui/back-button'
import TransactionDetailsCard from '../components/transaction-details-card'

interface TransactionByIdPageProps {
  params: Promise<{ id: string }>
}

export default async function TransactionByIdPage({ params }: TransactionByIdPageProps) {
  const { id } = await params
  return (
    <div>
      <BackButton />
      <div className="p-6">
        <TransactionDetailsCard transactionId={id} />
      </div>
    </div>
  )
}
