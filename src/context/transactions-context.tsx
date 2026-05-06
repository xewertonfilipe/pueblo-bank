'use client'

import toast from 'react-hot-toast'

import type { TransactionInterface } from '@/interfaces/transactions'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'bueplobank-storage'

interface TransactionsContextValue {
  transactions: TransactionInterface[]
  addTransaction: (transaction: Omit<TransactionInterface, 'id' | 'createdAt'>) => void
  updateTransaction: (id: string, transaction: Omit<TransactionInterface, 'id' | 'createdAt'>) => void
  removeTransaction: (id: string) => void
}

const TransactionsContext = createContext<TransactionsContextValue | null>(null)

function loadTransactions(): TransactionInterface[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return parsed?.state?.transactions ?? []
  } catch {
    return []
  }
}

function saveTransactions(transactions: TransactionInterface[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ state: { transactions } }))
}

let initialRender = true

export function TransactionsProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionInterface[]>(loadTransactions)

  useEffect(() => {
    if (initialRender) {
      initialRender = false
      return
    }
    saveTransactions(transactions)
  }, [transactions])

  const addTransaction = useCallback((transaction: Omit<TransactionInterface, 'id' | 'createdAt'>) => {
    setTransactions((prev) => [...prev, { ...transaction, id: crypto.randomUUID(), createdAt: new Date().toISOString() }])
    toast.success('Transação adicionada com sucesso!')
  }, [])

  const updateTransaction = useCallback((id: string, transaction: Omit<TransactionInterface, 'id' | 'createdAt'>) => {
    setTransactions((prev) => prev.map((t) => (t.id === id ? { ...transaction, id, createdAt: t.createdAt } : t)))
    toast.success('Transação atualizada com sucesso!')
  }, [])

  const removeTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
    toast.success('Transação removida com sucesso!')
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransaction, updateTransaction, removeTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionsProvider')
  }
  return context
}
