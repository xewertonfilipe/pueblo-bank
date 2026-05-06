'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import AddNewTransactionForm from './add-new-transaction-form'

export default function AddNewTransactionDesktop() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="justify-start">
          <Plus /> Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar nova transação</DialogTitle>
        </DialogHeader>
        <AddNewTransactionForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
