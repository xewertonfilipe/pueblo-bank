import { TransactionENUM } from "@/types/transaction"

export interface TransactionInterface {
    id: string
    title: string
    description: string
    type: TransactionENUM
    date: string
    amount: number
    createdAt: string
}
