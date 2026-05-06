import AmountCard from '@/components/amount-card'

export default function WelComeSection() {
  return (
    <div className="bg-secondary p-6 rounded-xl flex flex-col gap-4">
      <div>
        <h3 className="text-2xl font-medium">Olá, bem vindo(a)</h3>
      </div>
      <AmountCard />
    </div>
  )
}
